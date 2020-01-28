'''
         _                   _          _            _             _             _       
        / /\                /\ \       /\ \         _\ \          _\ \          /\ \     
       / /  \              /  \ \     /  \ \       /\__ \        /\__ \        /  \ \    
      / / /\ \            / /\ \ \   / /\ \ \     / /_ \_\      / /_ \_\      / /\ \ \   
     / / /\ \ \          / / /\ \_\ / / /\ \ \   / / /\/_/     / / /\/_/     / / /\ \ \  
    / / /  \ \ \        / / /_/ / // / /  \ \_\ / / /         / / /         / / /  \ \_\ 
   / / /___/ /\ \      / / /__\/ // / /   / / // / /         / / /         / / /   / / / 
  / / /_____/ /\ \    / / /_____// / /   / / // / / ____    / / / ____    / / /   / / /  
 / /_________/\ \ \  / / /      / / /___/ / // /_/_/ ___/\ / /_/_/ ___/\ / / /___/ / /   
/ / /_       __\ \_\/ / /      / / /____\/ //_______/\__\//_______/\__\// / /____\/ /    
\_\___\     /____/_/\/_/       \/_________/ \_______\/    \_______\/    \/_________/                                                                                    
Music Player using MPD
'''
# dependencies
import musicpd, json, subprocess, os, time, requests, traceback, logging
import xml.etree.ElementTree as ET
from subprocess import Popen, CREATE_NEW_CONSOLE
from flask import Flask, render_template, request, redirect, Response
from flask_cors import CORS 
from urllib.request import urlopen
from waitress import serve

# initialization
app = Flask(__name__) #Flask
CORS(app, resources=r'/api/*', allow_headers= ['Content-Type', 'Access-Control-Allow-Origin']) #Cross Origin for JSON
logging.getLogger('flask_cors').level = logging.DEBUG #Debug
client = musicpd.MPDClient() #mpd client
desired_volume = 50 #volume at start = 50

# functions
def startup_func():
	global desired_volume,client
	program = 'C:/mpd/mpd.exe' #make sure your path is correct
	args = 'C:/mpd/mpd.conf' #make sure your path is correct
	try:
		client.connect()
	except:
		Popen([program, args],creationflags = CREATE_NEW_CONSOLE) #CREATE_NEW_CONSOLE MAY ONLY WORK IN WINDOWS
		client.connect()
	if client.status()['state'] == 'play':
		desired_volume = int(client.status()['volume'])	
	else:
		client.rescan()
		client.clear()
		temp_list = client.listall() 
		for songs in temp_list: #builds a queue with all songs. can also use a playlist
			if 'file' in songs and songs['file'].endswith('.mp3'):
				client.add(songs['file'])
	return 'OK'

def songBuilder(song, attributes): 
	curr_song = {}
	for x in attributes:		
		try:
			curr_song[x] = song[x]			
		except:
			curr_song[x] = 'none'	
	return curr_song
startup_func()

def AlbumArtGenerator(album,artist):
	api_key = 'd1915a9d435d47526a61dc0210978583'
	retVal = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + api_key +'&artist='  + artist + '&album=' + album + '&format=json'

	r = requests.get(url = retVal) 
	r = r.content
	r = r.decode("UTF-8")
	k = json.loads(r)

	try:
		if k['album']['image'][4]['#text'] != '':
			return k['album']['image'][4]['#text']
	except:
		return 'none'

@app.route('/api/all_songs', methods = ['GET'])
def return_database_songs_as_list():
	client.rescan()	
	list = client.listallinfo()
	listOfSongs = []
	for song in list:
		temp = songBuilder(song,['title','artist','album','date','duration','albumArt'])
		try:
			temp['albumArt'] = AlbumArtGenerator(song['album'],song['artist'])
		except:
			pass
		listOfSongs.append(temp)
	return json.dumps(listOfSongs)

@app.route('/api/play', methods = ['POST'])
def play_pause():
	if client.status()['state'] != 'play':
		client.play()
		#if the server was in a 'stop' state, this check will give it a second to add 'volume' back to status which will allow
		#set_volume to work and avoid misreadings of the volume level
		if 'volume' not in client.status():
			time.sleep(1)
		set_volume(desired_volume) 
	else:
		client.pause(1)
	return 'OK',200

@app.route('/api/volume', methods = ['POST'])
def set_volume(x = -1): #won't let desired_volume be higher than 100 or lower than 0
	global desired_volume	
	
	if x != -1:
		vol = x
	else:
		req = request.get_json()
		vol = int(req['volume'])	
	if vol >= 0 and vol <= 100:
		desired_volume = vol
	elif vol < 0:
		desired_volume = 0
	else:
		desired_volume = 100
	client.setvol(desired_volume)
	return 'OK',200

@app.route('/api/seek', methods = ['POST'])
def seek():
	req = request.get_json()
	pos = float(req['seek'])
	
	if 'duration' in client.status():
		pos *= float(client.status()['duration'])
		if pos < float(client.status()['duration']):			
			pos = int(pos)
			client.seekcur(pos)
		else: next_song()   	
	return 'OK',200

@app.route('/api/next', methods = ['GET'])
def next_song():
	if client.status()['state'] == 'play' and int(client.status()['song']) != int(client.status()['playlistlength']) -1:
		client.next()
	return json.dumps(return_current_song())

@app.route('/api/previous', methods = ['GET'])
def prev_song():
	if client.status()['state'] == 'play': #this is a check
		if float(client.status()['elapsed']) > 3.: #if the song has played for over 3 seconds, start it over. otherwise play the previous song
			client.seekcur(0)
		elif client.status()['song'] != '0':
			client.previous()
	return json.dumps(return_current_song())

def song_stripper(s):
	#finds last slash in filename to remove directories
	index_of_slash = s.rfind('/')
	if index_of_slash != -1:
		temp_string = s[index_of_slash + 1:]
	else:
		temp_string = s
	#finds '.' at the end of file names to remove filetypes
	neg_size = len(temp_string) * -1
	for e in range(-1,-5,-1):
		if e < neg_size:
			break
		elif temp_string[e] == '.':
			temp_string = temp_string[0:e]
			break
	#finds the first letter in the file name to remove track numbers
	#can mess up file names of songs that start with a number or character
	size = len(temp_string) - 1
	for e in range(6):
		if e == size:
			break		
		elif temp_string[e].isalpha():
			temp_string = temp_string[e:]
			break
	return temp_string

@app.route('/api/get_vol', methods = ['GET'])
def get_volume(): 
	retVal = {'volume':desired_volume}
	return json.dumps(retVal) 

@app.route('/api/get_cur', methods = ['GET'])
def return_current_song(): #will currently return an empty list if nothing is return from client.currentsong()
	#song = client.currentsong()
	#x = client.playlistinfo(0)[0]
	attributes = ['file', 'title', 'artist','album','date','duration']
	status = client.status()
	song = client.currentsong() if status['state'] != 'stop' else client.playlistinfo(0)[0]
	elapsed = status['elapsed'] if status['state'] != 'stop' else '0'
	curr_song = songBuilder(song, attributes) if status['state'] != 'stop' else songBuilder(client.playlistinfo(0)[0], attributes)

	try:
		#client.next() ###################
		curr_song['title'] = curr_song.pop('file')
		curr_song['title'] = song_stripper(curr_song['title'])
		#if curr_song['title'] == 'Let it go (test)':
			#print()###############################
		curr_song['duration'] = song['duration']
		curr_song['elapsed'] = elapsed
		curr_song['AlbumArtMedium'] = AlbumArtGenerator(song['album'],song['artist'],'medium')
		curr_song['AlbumArtMega'] = AlbumArtGenerator(song['album'],song['artist'],'mega')
	except:
		pass
	return json.dumps(curr_song)

@app.route('/shuffle', methods = ['POST'])
def shuffle():
	client.shuffle()
	return 'OK',200
