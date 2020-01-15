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
    host_ip = ("0.0.0.0")
except socket.gaierror: 
  
    # this means could not resolve the host 
    print ("there was an error resolving the host")
    sys.exit() 
  
# connecting to the server 
s.connect((host_ip, port)) 
  
print ("the socket has successfully connected")

#Functions below

def seek(s):
	client.seekcur(s) #should i put checks to make sure negs dont go backwards and a num too high doesn't change songs?
	

def list_songs(): #lists songs in the playlist
	for song in client.playlistinfo():
		temp_string = (song["file"]) 
		temp_string = song_stripper(temp_string)
		print(temp_string)

def next_song():
	if client.status()['state'] == 'play': #this check prevented a crash on my system that didn't happen on other peoples
		client.next()

def prev_song():
	if client.status()['state'] == 'play': #this check prevented a crash on my system that didn't happen on other peoples
		if float(client.status()['elapsed']) > 3.: #if the song has played for over 3 seconds, start it over. otherwise play the previous song
			client.seekcur(0)  
		else:
			client.previous()



def play_pause():
	if client.status()['state'] != 'play': 
		client.play()
	else:
		client.pause(1)
		
def list_all_songs(): #will list only .mp3 files in the music directory, as well as in any directories inside 
	for song in client.listall():
		for x in song:
			if song[x][-1] == '3':	#only shows .mp3 files (or any file extension that ends in '3')	
				print(song[x])
				#print(song_stripper(song[x])) instead of above line to strip out directory, numbering, and extension data
				
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


#test menu

client = musicpd.MPDClient()       # create client object
client.connect(host_ip , port)
print(client.mpd_version) 
client.command_list_ok_begin()       # start a command list
client.update()                     
client.status()                      
client.stats()
results = client.command_list_end() 
print(results)