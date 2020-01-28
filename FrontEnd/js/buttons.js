function togglePlaying()
{
  document.getElementById("pause").style.display = "inline";
  document.getElementById("play").style.display = "none";

  fetch('http://localhost:5000/api/play', {    method: 'POST',
    mode: "cors"//,    //json payload
    //body: JSON.stringify({
        //"greeting": "Hello from the browser!"
    //})
    });
    j.then(function(response) { //fask should have printed
    return response.text();
    }).then(function (text) {    console.log('POST response: ');    // Should be 'OK' if everything was successful
    console.log(text);
    });
}

function toggleStopped()
{
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "inline";

  fetch('http://localhost:5000/api/play', {    method: 'POST',
    mode: "cors"//,    //json payload
    //body: JSON.stringify({
        //"greeting": "Hello from the browser!"
    //})
    });
    j.then(function(response) { //fask should have printed
    return response.text();
    }).then(function (text) {    console.log('POST response: ');    // Should be 'OK' if everything was successful
    console.log(text);
    });
}

function shuffle()
{
  document.getElementById("shuffle").style.color ="orange"
}

