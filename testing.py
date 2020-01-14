include musicpd

def play_pause():
	if client.status()['state'] == 'pause':
		client.pause(0)
	else:
		client.pause(1)
		
def list_all_songs():
	for song in client.listall():
		for x in song:
			if song[x][-1] == '3':		
				print(song[x])

client = musicpd.MPDClient()       # create client object
client.connect()
print(client.mpd_version) 
client.command_list_ok_begin()       # start a command list
client.update()                      
client.status()                      
client.stats()
results = client.command_list_end() 
print(results)


