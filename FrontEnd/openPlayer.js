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

