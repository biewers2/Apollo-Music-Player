function boot(){
  fetchAllSongs();
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

async function fetchAllSongs() {
  const response = await fetch('http://localhost:5000/all_songs', {method: 'GET', mode: 'cors'});
  const allSongs = await response.json();
  return allSongs;
  //Using "await" for all async functions instead of ".then()"
}

async function generateLibrary() {
  var library = await fetchAllSongs();
  var songList = document.getElementById("libraryBody");
  for (var i = 0; i < library.length; i++)(function(i) {
    var song = document.createElement("tr");
    song.id='tr'+i.toString();
    var songFile = library[i].file;
    song.onclick = async function() { await playSong(songFile) };

      var cell = document.createElement("td");
      cell.id='td'+i.toString()+':0';
      var songName = document.createTextNode(library[i].title);
      if(songName.textContent=='none'){
        songName = document.createTextNode(library[i].file);
      }
      cell.appendChild(songName);
      song.appendChild(cell);

      cell = document.createElement("td");
      cell.id = 'td' + i.toString() + ':1';
      var artistName = document.createTextNode(library[i].artist);
      cell.appendChild(artistName);
      song.appendChild(cell);


      cell = document.createElement("td");
      cell.id = 'td' + i.toString() + ':2';
      var albumName = document.createTextNode(library[i].album);
      cell.appendChild(albumName);
      song.appendChild(cell);


      cell = document.createElement("td");
      cell.id = 'td' + i.toString() + ':3';
      songLength = library[i].duration;
      minutes = (songLength/60);
      minutes = minutes.toFixed(2);
      var duration = document.createTextNode(minutes);
      cell.appendChild(duration);
      song.appendChild(cell);

    songList.appendChild(song);
  }(i));
}

async function addAlbums() { 
  var library = await fetchAllSongs();
  for(var i = 0; i < library.length; i++){
    if (library[i].albumArt == "./images/Logo1.png"){
      continue;
    }
    else 
    {
      var img = document.createElement('img');
      img.setAttribute("src" , library[i].albumArt);
      img.classList.add("square");
      img.classList.add("albumType");
      img.setAttribute("id" , library[i].album);
      document.getElementById("mainAlbums").append(img);
    }
  }
  albumButtons();
}

async function albumButtons(){
  var library = await fetchAllSongs();
  for(var i = 0; i < library.length; i++){
    if (library[i].albumArt == "./images/Logo1.png"){
      continue;
    }
    else 
    {
    document.getElementById(library[i].album).setAttribute('onclick' ,function changePlaying() {
      document.getElementById('currentAlbum').src=library[i].albumArt;
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

async function addArtists() { 
  var library = await fetchAllSongs();
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
  
  var j =fetch('http://localhost:5000/play', {method: 'POST', mode: 'cors'});
    j.then(function(response) { //fask should have printed 
    return response.text();
    }).then(function (text) {
    console.log('POST response: ');
    console.log(text);
  });
}

function toggleStopped()
{
    
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "inline";

  fetch('http://localhost:5000/play', {method: 'POST', mode: 'cors'}).then(function(response) {
    console.log(response);
  });
}

function nextSong()
{
  fetch('http://localhost:5000/next', {method: 'GET', mode: 'cors'}).then(function(response) {
  return response.text();
  }).then(function (text) {
  console.log('POST response: ');
  console.log(text);
  });
}

function prevSong()
{
  fetch('http://localhost:5000/previous', {method: 'GET', mode: 'cors'}).then(function(response) { 
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

async function add_to_playlist(song, playlist) {
  var songObj = { "song": song, "playlist": playlist };
  var asJSON = JSON.stringify(songObj);

  // POST
  const response = await fetch('http://localhost:5000/add_to_playlist', {
    method: 'POST',
    mode: 'cors',
    body: asJSON
  });

  const text = await response.text();

  console.log('POST response: ');
  // Should be 'OK' if everything was successful
  console.log(text);
}

async function remove_from_playlist(songPos, playlist) {
  var songObj = { "songPos": songPos, "playlist": playlist };
  var asJSON = JSON.stringify(songOBJ);

  //POST
  const response = await fetch('http://localhost:5000/remove_from_playlist', {
    method: 'POST',
    mode:'cors',
    body: asJSON
  });
  
  const text = await response.text();

  console.log("POST response: ");
  // Should be 'OK' if everything was successful
  console.log(text);
}

async function playSong(songName){
  var songOBJ={"file":songName};
  var asJSON = JSON.stringify(songOBJ);

  const response = await fetch('http://localhost:5000/play_song', {
    method: 'POST',
    mode:'cors',
    body:asJSON
  });

  const text = await response.text();

  console.log("POST response: ");
  // Should be 'OK' if everything was successful
  console.log(text);
}