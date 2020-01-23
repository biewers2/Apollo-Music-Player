function togglePlaying()
{
  document.getElementById("pause").style.display = "inline";
  document.getElementById("play").style.display = "none";
}

function toggleStopped()
{
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "inline";
}

function shuffle()
{
  document.getElementById("shuffle").style.color ="orange"
}