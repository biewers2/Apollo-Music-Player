function boot(){
  addAlbums();
  addPlaylists();
  addArtists();
  generateLibrary();

}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";

}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function go2Playlists(){
  if (document.getElementById("mainPlaylists").style.display = "none"){
  document.getElementById("mainPlaylists").style.display = "block";
  document.getElementById("mainArtists").style.display = "none";
  document.getElementById("mainAlbums").style.display = "none";
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
  document.getElementById("mainPlaylists").style.display = "none";
  document.getElementById("mainAlbums").style.display = "none";
  }
}


function generateLibrary() {

  var library = JSON.parse('[{"title": "Lost In The Woods (Weezer Version) - Copy", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "TEST SONG", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "Let it go (test)", "AlbumArtMedium": "https://lastfm.freetls.fastly.net/i/u/64s/a7349492601f4acccaa7db4c91959a9d.png(11 kB)", "AlbumArtMega": "https://lastfm.freetls.fastly.net/i/u/300x300/a7349492601f4acccaa7db4c91959a9d.png(222 kB)", "artist": "Demi Lovato", "album": "Frozen", "duration": "256.549"}, {"title": "All Is Found", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "126.328"}, {"title": "Some Things Never Change", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kristen Bell, Idina Menzel, Josh Gad, Jonathan Groff & Cast of Frozen II", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "209.998"}, {"title": "Into The Unknown", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Idina Menzel & AURORA", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "194.900"}, {"title": "When I Am Older", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Josh Gad", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "111.464"}, {"title": "Reindeer(s) Are Better Than People (Cont.)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "26.410"}, {"title": "Lost In The Woods", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "180.793"}, {"title": "Show Yourself", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Idina Menzel & Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "260.937"}, {"title": "The Next Right Thing", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kristen Bell", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "216.816"}, {"title": "Into The Unknown (Panic! At The Disco Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Panic! At the Disco", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "189.179"}, {"title": "All Is Found (Kacey Musgraves Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kacey Musgraves", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "183.771"}, {"title": "Lost In The Woods (Weezer Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "No Excuses", "AlbumArtMedium": "https://lastfm.freetls.fastly.net/i/u/64s/fa0877837fb245157e221f8c68aa0d06.png(6 kB)", "AlbumArtMega": "https://lastfm.freetls.fastly.net/i/u/300x300/fa0877837fb245157e221f8c68aa0d06.png(88 kB)", "artist": "NF", "album": "The Search", "year": "2019", "duration": "201.822"}]');

  var songList = document.getElementById("libraryBody");

  for (var i = 0; i < library.length; i++) {
    var song = document.createElement("tr");

      var cell = document.createElement("td");
      var songName = document.createTextNode(library[i].title);
      cell.appendChild(songName);
      song.appendChild(cell);

      cell = document.createElement("td");
      var artistName = document.createTextNode(library[i].artist);
      cell.appendChild(artistName);
      song.appendChild(cell);


      cell = document.createElement("td");
      var albumName = document.createTextNode(library[i].album);
      cell.appendChild(albumName);
      song.appendChild(cell);


      cell = document.createElement("td");
      songLength = library[i].duration;
      minutes = (songLength/60);
      minutes = minutes.toFixed(2);
      var duration = document.createTextNode(minutes);
      cell.appendChild(duration);
      song.appendChild(cell);

    songList.appendChild(song);
  }
}

function addAlbums() { 
  var library = JSON.parse('[{"title": "Lost In The Woods (Weezer Version) - Copy", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "TEST SONG", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "Let it go (test)", "AlbumArtMedium": "https://lastfm.freetls.fastly.net/i/u/64s/a7349492601f4acccaa7db4c91959a9d.png(11 kB)", "AlbumArtMega": "https://lastfm.freetls.fastly.net/i/u/300x300/a7349492601f4acccaa7db4c91959a9d.png(222 kB)", "artist": "Demi Lovato", "album": "Frozen", "duration": "256.549"}, {"title": "All Is Found", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "126.328"}, {"title": "Some Things Never Change", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kristen Bell, Idina Menzel, Josh Gad, Jonathan Groff & Cast of Frozen II", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "209.998"}, {"title": "Into The Unknown", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Idina Menzel & AURORA", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "194.900"}, {"title": "When I Am Older", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Josh Gad", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "111.464"}, {"title": "Reindeer(s) Are Better Than People (Cont.)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "26.410"}, {"title": "Lost In The Woods", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "180.793"}, {"title": "Show Yourself", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Idina Menzel & Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "260.937"}, {"title": "The Next Right Thing", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kristen Bell", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "216.816"}, {"title": "Into The Unknown (Panic! At The Disco Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Panic! At the Disco", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "189.179"}, {"title": "All Is Found (Kacey Musgraves Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kacey Musgraves", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "183.771"}, {"title": "Lost In The Woods (Weezer Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "No Excuses", "AlbumArtMedium": "https://lastfm.freetls.fastly.net/i/u/64s/fa0877837fb245157e221f8c68aa0d06.png(6 kB)", "AlbumArtMega": "https://lastfm.freetls.fastly.net/i/u/300x300/fa0877837fb245157e221f8c68aa0d06.png(88 kB)", "artist": "NF", "album": "The Search", "year": "2019", "duration": "201.822"}]');
  for(var i = 0; i < library.length; i++){
    if (library[i].AlbumArtMega == "./images/Logo1.png"){
      continue;
    }
    else 
    {
      var img = document.createElement('img');
      img.setAttribute("src" , library[i].AlbumArtMega);
      img.classList.add("square");
      img.classList.add("albumType");
      img.setAttribute("id" , library[i].album);
      document.getElementById("mainAlbums").append(img);
    }
  }
  albumButtons();
}
function albumButtons(){
  var library = JSON.parse('[{"title": "Lost In The Woods (Weezer Version) - Copy", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "TEST SONG", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "Let it go (test)", "AlbumArtMedium": "https://lastfm.freetls.fastly.net/i/u/64s/a7349492601f4acccaa7db4c91959a9d.png(11 kB)", "AlbumArtMega": "https://lastfm.freetls.fastly.net/i/u/300x300/a7349492601f4acccaa7db4c91959a9d.png(222 kB)", "artist": "Demi Lovato", "album": "Frozen", "duration": "256.549"}, {"title": "All Is Found", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "126.328"}, {"title": "Some Things Never Change", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kristen Bell, Idina Menzel, Josh Gad, Jonathan Groff & Cast of Frozen II", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "209.998"}, {"title": "Into The Unknown", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Idina Menzel & AURORA", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "194.900"}, {"title": "When I Am Older", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Josh Gad", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "111.464"}, {"title": "Reindeer(s) Are Better Than People (Cont.)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "26.410"}, {"title": "Lost In The Woods", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "180.793"}, {"title": "Show Yourself", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Idina Menzel & Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "260.937"}, {"title": "The Next Right Thing", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kristen Bell", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "216.816"}, {"title": "Into The Unknown (Panic! At The Disco Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Panic! At the Disco", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "189.179"}, {"title": "All Is Found (Kacey Musgraves Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kacey Musgraves", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "183.771"}, {"title": "Lost In The Woods (Weezer Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "No Excuses", "AlbumArtMedium": "https://lastfm.freetls.fastly.net/i/u/64s/fa0877837fb245157e221f8c68aa0d06.png(6 kB)", "AlbumArtMega": "https://lastfm.freetls.fastly.net/i/u/300x300/fa0877837fb245157e221f8c68aa0d06.png(88 kB)", "artist": "NF", "album": "The Search", "year": "2019", "duration": "201.822"}]');
  for(var i = 0; i < library.length; i++){
    if (library[i].AlbumArtMega == "./images/Logo1.png"){
      continue;
    }
    else 
    {
    document.getElementById(library[i].album).setAttribute('onclick' ,function changePlaying() {
      document.getElementById('currentAlbum').src=library[i].AlbumArtMega;
    });
  }
}
}

function addPlaylists() { 
      var img = document.createElement('img');
      img.src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png"
      img.classList.add("square");
      document.getElementById("mainPlaylists").append(img);
}

function addArtists() { 
  var library = JSON.parse('[{"title": "Lost In The Woods (Weezer Version) - Copy", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "TEST SONG", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "Let it go (test)", "AlbumArtMedium": "https://lastfm.freetls.fastly.net/i/u/64s/a7349492601f4acccaa7db4c91959a9d.png(11 kB)", "AlbumArtMega": "https://lastfm.freetls.fastly.net/i/u/300x300/a7349492601f4acccaa7db4c91959a9d.png(222 kB)", "artist": "Demi Lovato", "album": "Frozen", "duration": "256.549"}, {"title": "All Is Found", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "126.328"}, {"title": "Some Things Never Change", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kristen Bell, Idina Menzel, Josh Gad, Jonathan Groff & Cast of Frozen II", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "209.998"}, {"title": "Into The Unknown", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Idina Menzel & AURORA", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "194.900"}, {"title": "When I Am Older", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Josh Gad", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "111.464"}, {"title": "Reindeer(s) Are Better Than People (Cont.)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "26.410"}, {"title": "Lost In The Woods", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "180.793"}, {"title": "Show Yourself", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Idina Menzel & Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "260.937"}, {"title": "The Next Right Thing", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kristen Bell", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "216.816"}, {"title": "Into The Unknown (Panic! At The Disco Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Panic! At the Disco", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "189.179"}, {"title": "All Is Found (Kacey Musgraves Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Kacey Musgraves", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "183.771"}, {"title": "Lost In The Woods (Weezer Version)", "AlbumArtMedium": "./images/Logo1.png", "AlbumArtMega": "./images/Logo1.png", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "year": "2019", "duration": "184.947"}, {"title": "No Excuses", "AlbumArtMedium": "https://lastfm.freetls.fastly.net/i/u/64s/fa0877837fb245157e221f8c68aa0d06.png(6 kB)", "AlbumArtMega": "https://lastfm.freetls.fastly.net/i/u/300x300/fa0877837fb245157e221f8c68aa0d06.png(88 kB)", "artist": "NF", "album": "The Search", "year": "2019", "duration": "201.822"}]');
  var lastArtist = null;
  var artistTable = document.createElement('table');
  artistTable.classList.add("artistDisplay");
  for(var i = 0; i < library.length; i++){
  
      var row = document.createElement("tr");

      var artistName = document.createElement("td");
      var artist = document.createTextNode(library[i].artist);
      lastArtist = artist;
      artistName.append(artist);
      row.append(artistName);
      artistTable.append(row);
  }

    document.getElementById("mainArtists").append(artistTable);
}


function togglePlaying()
{
  document.getElementById("pause").style.display = "inline";
  document.getElementById("play").style.display = "none";
  
  var j =fetch('http://localhost:5000/play', {

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

function toggleStopped()
{
    
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "inline";

  fetch('http://localhost:5000/play', {

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

 function SetVolume(val) 
  {
          var player = document.getElementById('vol-control');
          console.log('Before: ' + player.volume);
          player.volume = val / 100;
          console.log('After: ' + player.volume);

          var asJSON = JSON.stringify({'volume':val});
          console.log(asJSON)

    //POST
    fetch('http://localhost:5000/volume', {
              method: 'POST',
              mode: "cors",
              body: asJSON,
              headers:{
                  "Content-Type": 'application/json'
              }
    }).then(function(response){
      return response.text();
    }).then(function(text){
      console.log('POST reponse: ');

      console.log(text);
    });
  }

