import musicpd

client = musicpd.MPDClient()       # create client object
client.connect()
#print(client.mpd_version) 
client.command_list_ok_begin()       # start a command list
results = client.command_list_end()
client.update()

#client.status()
#client.stats()

def return_all_songs_as_list():
	listOfSongs = []
	for song in client.listall():
		for x in song:
			if song[x][-1] == '3':		
				listOfSongs.append(song[x])
	return listOfSongs

# adds the song given in 'filename' to the current playlist/queue
# prints an error message if the song could not be found in the files and returns 1
def add_song_to_playlist(filename):
	song_in_files = False
	# check each song in the library to see if the filename matches any known paths
	listOfSongs = return_all_songs_as_list()
	for song in listOfSongs:
		if filename == song:
			song_in_files = True
			break
	# if it found the song, add it
	if song_in_files:
		client.add(filename)
		return 0
	#if not, tell us we failed
	else:
		print("Could not find song: " + filename + " in files")
		return 1

def play_pause():
	if client.status()['state'] != 'play': 
		client.play()
	else:
		client.pause(1)
		
def list_all_songs():
	for song in client.listall():
		for x in song:
			if song[x][-1] == '3':		
				print(song[x])
				
def song_stripper(s):  #test code -- might have bugs
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
		if e == size:  #TEST
			break		
		elif temp_string[e].isalpha():
			temp_string = temp_string[e:]
			break

	return temp_string

client.clear()
#list_all_songs()

add_song_to_playlist('open/summer_os.mp3')
print(client.playlist())
print("")

add_song_to_playlist('summer_os.mp3')
print(client.playlist())
print("")

add_song_to_playlist('lksdsdfjksdf')
print(client.playlist())
print("")

#client.play()
#play_pause()
#print(results)

client.disconnect()
