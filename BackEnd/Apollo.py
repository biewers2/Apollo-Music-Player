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
Backend pre-release. V0
'''

import socket # for socket 
import sys 
import musicpd

try: 
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
    print ("Socket successfully created")
except socket.error as err: 
    print ("socket creation failed with error %s") %(err) 
  
# default port for socket 
port = 6600
  
try: 
    host_ip = ("localhost")
except socket.gaierror: 
  
    # this means could not resolve the host 
    print ("there was an error resolving the host")
    sys.exit() 
  
# connecting to the server 
s.connect((host_ip, port)) 
  
print ("the socket has successfully connected")

#Functions below

def get_volume(): #now works when a song is not playing
 	return desired_volume
'''	
def set_volume(s): #testing functionality to change volume when song is not playing
	if s >= 0 and s <= 100:
		client.setvol(s)'''
def set_volume(vol): #wont let desired_volume be higher than 100 or lower than 0
	global desired_volume
	if vol >= 0 and vol <= 100:
		desired_volume = vol
	elif vol < 0:
		desired_volume = 0
	else:
		desired_volume = 100
		
	client.setvol(desired_volume)

def seek(s):
	if 'duration' in client.status():
		if s < float(client.status()['duration']):
			client.seekcur(s) 
		else: client.next()

def list_songs(): #lists songs in the playlist
	for song in client.playlistinfo():
		temp_string = (song["file"]) 
		temp_string = song_stripper(temp_string)
		print(temp_string)
'''
#works and marked final, but testing another version of each function
def next_song():
	if client.status()['state'] == 'play': #this check prevented a crash on my system that didn't happen on other peoples
		client.next()
def prev_song():
	if client.status()['state'] == 'play': #this check prevented a crash on my system that didn't happen on other peoples
		if float(client.status()['elapsed']) > 3.: #if the song has played for over 3 seconds, start it over. otherwise play the previous song
			client.seekcur(0)  
		else:
			client.previous()
'''


def next_song():
	if client.status()['state'] == 'play' and int(client.status()['song']) != int(client.status()['playlistlength']) -1: 
		client.next()

			
			
def prev_song():
	if client.status()['state'] == 'play': #this check prevented a crash on my system that didn't happen on other peoples
		if float(client.status()['elapsed']) > 3.: #if the song has played for over 3 seconds, start it over. otherwise play the previous song
			client.seekcur(0)  
		elif client.status()['song'] != '0':
			client.previous()
'''
def play_pause():
	if client.status()['state'] != 'play': 
		client.play()
	else:
		client.pause(1)
'''
def play_pause():
	if client.status()['state'] != 'play': 
		client.play()
		set_volume(desired_volume)
		
	else:
		client.pause(1)
''' 
#works and marked final but testing another version
def list_all_songs(): #will list only .mp3 files in the music directory, as well as in any directories inside 
	for song in client.listall():
		for x in song:
			if song[x][-1] == '3':	#only shows .mp3 files (or any file extension that ends in '3')	
				print(song[x])
				#print(song_stripper(song[x])) instead of above line to strip out directory, numbering, and extension data
'''

def list_all_songs():
	for path in client.listall():
		for type in path:
			if path[type].endswith('.mp3'):
				print(song_stripper(path[type]))


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


def add_song_to_queue(filename):
	try:
		client.add(filename)
	except:
		print("Could not find the file: " + filename)


def return_queue_songs_as_list():  # Returns a list of the playlist
	retval = []
	for song in client.playlist():
		if song.endswith('.mp3'):
			retval.append(song[6:])

	return retval


def remove_song_from_queue(fileName):  # get back to this
        song_in_playlist = False
        # check each song in the playlist to see if the filename matches what is in playlist
        # playlistSongs = return_playList_songs_as_list()
        # should it go with append or with the remove function because of the UI element
        playListOfSongs = return_queue_songs_as_list()
        pos = 0
        for song in playListOfSongs:
            print(pos)
            print(fileName)
            print(song)
            if fileName == song:
                song_in_playlist = True
                break
            pos = pos + 1
                
        if song_in_playlist:
            try:
                client.delete(pos)
            except:
                print("something went horribly wrong with the remove function")


client = musicpd.MPDClient()       # create client object
client.connect(host_ip , port)
print(client.mpd_version) 
client.command_list_ok_begin()       # start a command list
client.update()                     
client.status()                      
client.stats()
results = client.command_list_end() 
print(results)


desired_volume = 50
#checks to see if mpd is playing and if it is, sets the client volume to the mpd volume 
if 'volume' in client.status() and client.status()['volume'] != '-1': 
	desired_volume = int(client.status()['volume'])
set_volume(desired_volume)

print()
print("q for quit")
print("gvol for get volume")
print("svol for set volume")
print("space for play or pause")
print("n for next song")
print("p for previous song")
print("k for seeking (go to a specific time in the song)")
print("lsp for listing songs in the playlist")
print("lss for listing all songs in mpd")
print("ss for song stripper (except you probably shouldn't call it)")

user_input = "b"

while user_input != "q":
	if user_input == "gvol":
		print(get_volume())
	elif user_input =="svol":
		desired_volume = int(input("\nWhat do you want to set the volume to?: "))
		set_volume(desired_volume)
	elif user_input == " ":
		play_pause()
	elif user_input == "n":
		next_song()
	elif user_input == "p":
		prev_song()
	elif user_input == "k":
		position = float(input("What position do you want?"))
		seek(position)
	elif user_input == "lsp":
		list_songs()
	elif user_input == "lss":
		list_all_songs()
	elif user_input == "ss":
		song_stripper()
	user_input = input()
