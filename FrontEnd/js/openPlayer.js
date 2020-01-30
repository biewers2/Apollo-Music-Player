//var objList;
var objList = JSON.parse('{"songs": [{"title": "Let It Go", "artist": "Demi Lovato", "album": "Frozen", "duration": "256.549"}, {"title": "Lost In The Woods (Weezer Version) | CAPEJAMS.ORG", "artist": "Weezer", "album": "Weezer", "duration": "184.947"}, {"title": "Lost In The Woods (Weezer Version) | CAPEJAMS.ORG", "artist": "Weezer", "album": "Weezer test album", "duration": "184.947"}, {"title": "All Is Found | CAPEJAMS.ORG", "artist": "Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "duration": "126.328"}, {"title": "Some Things Never Change | CAPEJAMS.ORG", "artist": "Kristen Bell, Idina Menzel, Josh Gad, Jonathan Groff & Cast of Frozen II", "album": "Frozen II | CAPEJAMS.ORG", "duration": "209.998"}, {"title": "Into The Unknown | CAPEJAMS.ORG", "artist": "Idina Menzel & AURORA", "album": "Frozen II | CAPEJAMS.ORG", "duration": "194.900"}, {"title": "When I Am Older | CAPEJAMS.ORG", "artist": "Josh Gad", "album": "Frozen II | CAPEJAMS.ORG", "duration": "111.464"}, {"title": "Reindeer(s) Are Better Than People (Cont.) | CAPEJAMS.ORG", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "duration": "26.410"}, {"title": "Lost In The Woods | CAPEJAMS.ORG", "artist": "Jonathan Groff", "album": "Frozen II | CAPEJAMS.ORG", "duration": "180.793"}, {"title": "Show Yourself | CAPEJAMS.ORG", "artist": "Idina Menzel & Evan Rachel Wood", "album": "Frozen II | CAPEJAMS.ORG", "duration": "260.937"}, {"title": "The Next Right Thing | CAPEJAMS.ORG", "artist": "Kristen Bell", "album": "Frozen II | CAPEJAMS.ORG", "duration": "216.816"}, {"title": "Into The Unknown (Panic! At The Disco Version) | CAPEJAMS.ORG", "artist": "Panic! At the Disco", "album": "Frozen II | CAPEJAMS.ORG", "duration": "189.179"}, {"title": "All Is Found (Kacey Musgraves Version) | CAPEJAMS.ORG", "artist": "Kacey Musgraves", "album": "Frozen II | CAPEJAMS.ORG", "duration": "183.771"}, {"title": "Lost In The Woods (Weezer Version) | CAPEJAMS.ORG", "artist": "Weezer", "album": "Frozen II | CAPEJAMS.ORG", "duration": "184.947"}, {"title": "No Excuses", "artist": "NF", "album": "The Search", "duration": "201.822"}], "albums": [{"albumname": "Frozen II | CAPEJAMS.ORG", "pic": "none", "artist": "Weezer"}, {"albumname": "Weezer", "pic": "https://lastfm.freetls.fastly.net/i/u/300x300/a986774f52c2438fbe38f019812d3896.png", "artist": "Weezer"}, {"albumname": "Weezer test album", "pic": "none", "artist": "Weezer"}, {"albumname": "The Search", "pic": "https://lastfm.freetls.fastly.net/i/u/300x300/fa0877837fb245157e221f8c68aa0d06.png", "artist": "NF"}, {"albumname": "Frozen", "pic": "https://lastfm.freetls.fastly.net/i/u/300x300/a7349492601f4acccaa7db4c91959a9d.png", "artist": "Demi Lovato"}], "artists": [{"name": "Weezer", "albums": ["none", "https://lastfm.freetls.fastly.net/i/u/300x300/a986774f52c2438fbe38f019812d3896.png", "none"]}, {"name": "Kristen Bell", "albums": ["none"]}, {"name": "Idina Menzel & Evan Rachel Wood", "albums": ["none"]}, {"name": "Josh Gad", "albums": ["none"]}, {"name": "Jonathan Groff", "albums": ["none"]}, {"name": "Idina Menzel & AURORA", "albums": ["none"]}, {"name": "NF", "albums": ["https://lastfm.freetls.fastly.net/i/u/300x300/fa0877837fb245157e221f8c68aa0d06.png"]}, {"name": "Kacey Musgraves", "albums": ["none"]}, {"name": "Panic! At the Disco", "albums": ["none"]}, {"name": "Kristen Bell, Idina Menzel, Josh Gad, Jonathan Groff & Cast of Frozen II", "albums": ["none"]}, {"name": "Demi Lovato", "albums": ["https://lastfm.freetls.fastly.net/i/u/300x300/a7349492601f4acccaa7db4c91959a9d.png"]}, {"name": "Evan Rachel Wood", "albums": ["none"]}]}');

function boot(){
  boot2();//call fetchallsongs() instead of boot2 here
}

function boot2(){
  currentlyPlaying();
  addAlbums();
  addPlaylists();
  addArtists();
  generateLibrary();
}

function openSearch() {
 if (document.getElementById("mainSearch").style.display = "none"){
  document.getElementById("mainSearch").style.display = "block";
  document.getElementById("mainPlaylists").style.display = "none";
  document.getElementById("mainArtists").style.display = "none";
  document.getElementById("mainAlbums").style.display = "none";
 }
}

function go2Playlists(){
  if (document.getElementById("mainPlaylists").style.display = "none"){
  document.getElementById("mainPlaylists").style.display = "block";
  document.getElementById("mainArtists").style.display = "none";
  document.getElementById("mainAlbums").style.display = "none";
  document.getElementById("mainSearch").style.display = "none";
  }
}
function go2Albums(){
  if (document.getElementById("mainAlbums").style.display = "none"){
  document.getElementById("mainAlbums").style.display = "block";
  document.getElementById("mainPlaylists").style.display = "none"
  document.getElementById("mainArtists").style.display = "none"
  document.getElementById("mainSearch").style.display = "none"
  }
}
function go2Artists(){
  if (document.getElementById("mainArtists").style.display = "none"){
  document.getElementById("mainArtists").style.display = "block";
  document.getElementById("mainPlaylists").style.display = "none";
  document.getElementById("mainAlbums").style.display = "none";
  document.getElementById("mainSearch").style.display = "none";
  }
}

function current() {
  
  if (document.getElementById("currentCue").style.display = "none"){
   document.getElementById("currentCue").style.display = "block";
  }
 }

 function closeCurrent() {
  
  if (document.getElementById("currentCue").style.display = "block"){
   document.getElementById("currentCue").style.display = "none";
  }
 }

function shuffle() {
  var x = document.getElementById("shuffle");
  if (x.style.color === "white") {
    x.style.color = "#f7931E";
     /* shuffle on*/
  } else {
    x.style.color = "white";
     /* shuffle off*/
  }
}

function repeat() {
  var x = document.getElementById("rewind");
  if (x.style.color === "white") {
    x.style.color = "#f7931E";
    /* repeat playlist on*/
  } else {
    x.style.color = "white";
     /* repeat off*/
  }
}

function repeatSong() {
  var x = document.getElementById("rewind");
  var y = document.getElementById("rewindSong");
  if (x.style.display === "inline") {
    x.style.display = "none";
    y.style.display = "inline";
    /* repeat song on*/
  } else {
    x.style.color = "white";
    x.style.display = "inline";
    y.style.display = "none";
     /* repeat off*/
  }
 
}
/*
function fetchAllSongs() {
  fetch('http://localhost:5000/api/obj_list', {method: 'GET', mode: 'cors'})
  .then(function(response) {
    return response.json();
    }).then(function (obj) {
    console.log('POST response: ');
    objList = obj;
    console.log(objList);
    boot2();
  });
}
*/
function generateLibrary() {
  var library = [];
  library = objList.songs;
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
  var library = [];
  library = objList.albums;
  for(var i = 0; i < library.length; i++){
     if ((library[i].pic == null) || (library[i].pic == "none")){
        var img = document.createElement('img');
        img.setAttribute("src", "./images/AlbumArt-01.png");
        img.classList.add("square");
        img.classList.add("albumType");
        img.setAttribute("id", library[i].pic);
        document.getElementById("mainAlbums").append(img);
    }
    else 
    {
      var img = document.createElement('img');
      img.setAttribute("src" , library[i].pic);
      img.classList.add("square");
      img.classList.add("albumType");
      img.setAttribute("id" , library[i].pic);
      document.getElementById("mainAlbums").append(img);
      console.log(img);
    }
  }
  albumButtons();
}

function albumButtons(){
  var library = [];
  library = objList.albums;
  for(var i = 0; i < library.length; i++){
    if (library[i].pic == "./images/Logo1.png"){
      continue;
    }
    else 
    {
    document.getElementById(library[i].pic).setAttribute('onclick' ,function changePlaying() {
      document.getElementById('currentAlbum').src=library[i];
    });
  }
}
}

function addPlaylists() { 
      var img = document.createElement('img');
      img.setAttribute('onclick', function newPlaylist(){
        document.getElementById("mainPlaylist").append(img);
      });
      img.src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png"
      img.classList.add("square");
      img.setAttribute("onclick" , "current()")
      document.getElementById("mainPlaylists").append(img);
}

function addArtists() { 
  var library = [];
  library = objList.artists;
  let artistSet = new Set();
  var artistTable = document.createElement('table');
  artistTable.classList.add("artistDisplay");

  for (var i=0; i < library.length; i++){
    artistSet.add(library[i].name);
  };

  let artistArray = Array.from(artistSet);
  artistArray.sort();
  for(var i =0; i<artistArray.length; i++){

    var row = document.createElement("tr");

    var artistName = document.createElement("td");
    var artist = document.createTextNode(artistArray[i]);
    artistName.append(artist);
    row.append(artistName);
    row.setAttribute("id" , "artist-" + artistArray[i]);
    artistTable.append(row);
  } 

  document.getElementById("mainArtists").append(artistTable);
}

function togglePlaying()
{
  document.getElementById("pause").style.display = "inline";
  document.getElementById("play").style.display = "none";
  
  var j =fetch('http://localhost:5000/api/play', {method: 'POST', mode: 'cors'});
    j.then(function(response) { //fask should have printed 
    return response.text();
    }).then(function (text) {
    console.log('POST response: ');
    console.log(text);
  });
    move();
}

function toggleStopped()
{
    
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "inline";

  fetch('http://localhost:5000/api/play', {method: 'POST', mode: 'cors'}).then(function(response) {
    console.log(response);
  });
}

function nextSong()
{
  fetch('http://localhost:5000/api/next', {method: 'GET', mode: 'cors'}).then(function(response) {
  return response.text();
  }).then(function (text) {
  console.log('POST response: ');
  console.log(text);
  });
}

function prevSong()
{
  fetch('http://localhost:5000/api/previous', {method: 'GET', mode: 'cors'}).then(function(response) { 
  return response.text();
  }).then(function (text) {
    console.log('GET response: ');
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
  fetch('http://localhost:5000/api/volume', {
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

function shuffle()
{
    var j = fetch('http://localhost:5000/api/shuffle', { method: 'POST', mode: 'cors' });
    j.then(function (response) { //fask should have printed 
        return response.text();
    }).then(function (text) {
        console.log('POST response: ');
        console.log(text);
    });
}
/*
function currentlyPlaying() {
  fetch('http://localhost:5000/api/get_current', {method: 'GET', mode: 'cors'})
  .then(function(response) {
    return response.json();
    })
    .then(function (obj) {
    console.log(obj);
    console.log(obj.palette[0]);
    var r = obj.palette[0][0];
    var g = obj.palette[0][1];
    var b = obj.palette[0][2];
    document.getElementById('currentlyPlaying').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('currentAlbum').setAttribute('src', obj.pic);
    document.getElementById('returnCurrentSong').innerHTML = obj.title;
    document.getElementById('returnCurrentArtist').innerHTML = obj.artist;    
  });
}
*/

function currentlyPlaying(){
  let obj = JSON.parse('{"title": "Let It Go", "artist": "Demi Lovato", "album": "Frozen", "duration": "256.549", "pic": "https://lastfm.freetls.fastly.net/i/u/300x300/a986774f52c2438fbe38f019812d3896.png"}');

  document.getElementById('currentAlbum').setAttribute('src' , obj.pic);
  document.getElementById('returnCurrentSong').innerHTML = obj.title;
  document.getElementById('returnCurrentArtist').innerHTML = obj.artist;
  var songLength = obj.duration/60;
  songLength = songLength.toFixed(2);
  document.getElementById('duration').innerHTML = songLength;
}


function move() { //only moves the progress bar but won't seek 

  var progress = document.getElementById("progressBar");
  var width = 0;
  var id = setInterval(frame, 1000);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      seconds = width/100;
      seconds = seconds/60;
      seconds = seconds.toFixed(2);
      progress.value = width;
      document.getElementById('songProgress').innerHTML = width;
    }
  }
}
