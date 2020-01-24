function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function go2Playlists(){
  if (document.getElementById("mainPlaylists").style.display = "none"){
  document.getElementById("mainPlaylists").style.display = "block";
  document.getElementById("mainArtists").style.display = "none"
  document.getElementById("mainAlbums").style.display = "none"
  }
}
function go2Albums(){
  if (document.getElementById("mainAlbums").style.display = "none"){
  document.getElementById("mainAlbums").style.display = "block";
  document.getElementById("mainPlaylists").style.display = "none"
  document.getElementById("mainArtists").style.display = "none"
  }
}
function go2Artists(){
  if (document.getElementById("mainArtists").style.display = "none"){
  document.getElementById("mainArtists").style.display = "block";
  document.getElementById("mainPlaylists").style.display = "none"
  document.getElementById("mainAlbums").style.display = "none"
  }
}

function nextSong()
    {
        fetch('http://localhost:5000/next_song', {

            method: 'GET',
            mode: "cors"

            //json payload
            //body: JSON.stringify({
                //"greeting": "Hello from the browser" //})
            }).then(function(response) { //fask should have printed 
				return response.text();
			}).then(function (text) {

				console.log('POST response: ');

				// Should be 'OK' if everything was successful
				console.log(text);
		});
    }

function togglePlaying()
{
  document.getElementById("pause").style.display = "inline";
  document.getElementById("play").style.display = "none";
  
  var j =fetch('http://localhost:5000/play_pause', {

    method: 'POST',
    mode: "cors"//,

    //json payload
    //body: JSON.stringify({
        //"greeting": "Hello from the browser!"
    //})
    });
    j.then(function(response) { //fask should have printed 
    return response.text();
    }).then(function (text) {

    console.log('POST response: ');

    // Should be 'OK' if everything was successful
    console.log(text);
    });
}

function prevSong()
    {
        fetch('http://localhost:5000/prev_song', {

            method: 'GET',
            mode: "cors"

            //json payload
            //body: JSON.stringify({
                //"greeting": "Hello from the browser"
                //})
            }).then(function(response) { //fask should have printed 
				return response.text();
			}).then(function (text) {

            console.log('GET response: ');
			// Should be 'OK' if everything was successful
			console.log(text);
		});
	}

function toggleStopped()
{
    
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "inline";

  fetch('http://localhost:5000/play_pause', {

    method: 'POST',
    mode: "cors"//,

    //json payload
    //body: JSON.stringify({
        //"greeting": "Hello from the browser!"
    //})
    }).then(function(response) { //fask should have printed 
    console.log(response);
    });
}
