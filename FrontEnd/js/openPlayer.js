function current() {
    currQueue = document.getElementById("currentQueue")
    if (currQueue.style.display = "none") {
        currQueue.style.display = "block";
    }
}

function closeCurrent() {
    currQueue = document.getElementById('currentQueue');
    if (currQueue.style.display = "block"){
        currQueue.style.display = "none";
    }
}


function shuffle() {
    var shuf = document.getElementById("shuffle");
    if (shuf.style.color === "white") {
        shuf.style.color = "#f7931E";

        /* Shuffle turning on... */
        fetch(
            TEMP_API_LINK + 'shuffle',
            { method: 'POST', mode: 'cors' }
        ).then((response) => { 
            // (Flask should have printed)
            return response.text();
        }).then((text) => {
            currentlyPlaying();
            // console.log('POST response: ');
            // console.log(text);
        });
        /* Shuffle turned on! */
    }
    else {
        shuf.style.color = "white";

        /* Shuffle turning off... */
        fetch(
            TEMP_API_LINK + 'unshuffle',
            { method: 'POST', mode: 'cors' }
        ).then((response) => { 
            // (Flask should have printed)
            return response.text();
        }).then((text) => {
            currentlyPlaying();
            // console.log('POST response: ');
            // console.log(text);
        });
    }
}

function repeatSong() {
    fetch(
        TEMP_API_LINK + 'repeatSong',
        { method: 'POST', mode: 'cors' }
    ).then((response) => {
        // (Flask should have printed)
        return response.text();
    }).then((text) => {
        // console.log('POST response: ');
        // console.log(text);
    });

    var rewind = document.getElementById("rewind");
    var song = document.getElementById("rewindSong");
    /* Turns repeat 'on'. */
    if (rewind.style.display === "inline") {
        rewind.style.display = "none";
        song.style.display = "inline";
    }
    /* Turns repeat 'off'. */
    else {
        rewind.style.color = "white";
        rewind.style.display = "inline";
        song.style.display = "none";
    }
}

function repeat() {
    fetch(
        TEMP_API_LINK + 'repeat',
        { method: 'POST', mode: 'cors' }
    ).then((response) => {
        // (Flask should have printed)
        return response.text();
    }).then((text) => {
        console.log('POST response: ');
        console.log(text);
    });

    var rewind = document.getElementById("rewind");
    if (rewind.style.color === "white") /* Turns repeat playlist 'on'. */
        rewind.style.color = "#f7931E";
    else rewind.style.color = "white";  /* Turns repeat playlist 'off'. */
}

function repeatoff() {
    fetch(
        TEMP_API_LINK + 'repeatoff',
        { method: 'POST', mode: 'cors' }
    ).then((response) => {
        // (Flask should have printed)
        return response.text();
    }).then((text) => {
        console.log('POST response: ');
        console.log(text);
    });

    var rewind = document.getElementById("rewind");
    var rewindSong = document.getElementById("rewindSong");

    /* Turns repeat song 'off'. */
    if (rewindSong.style.display === "inline" || rewind.style.color === "#f7931E") {
        rewind.style.color = "white";
        rewind.style.display = "inline";
        rewindSong.style.display = "none";
    }
}

function fetchAllSongs() {
    fetch(
        TEMP_API_LINK + 'obj_list',
        { method: 'GET', mode: 'cors' }
    ).then((response) => {
        return response.json();
    }).then((obj) => {
        //console.log('POST response: ');
        objList = obj;
        //console.log(objList);
    });
}

function generateLibrary() {
    var library = [];
    library = objList.songs;
    var songList = document.getElementById("libraryBody");
    for (var i = 0; i < library.length; i++) {
        var song = document.createElement("tr");
        /*
        var id= library[i].id;
        id = parse.JSON(id);
        song.setAttribute ('onclick' , function idSendPlay() {
        fetch('http://localhost:5000/api/play_selected', {method: 'POST', mode: "cors", body: id, headers:{"Content-Type": 'application/json'}
        })
        .then(function(response){
        return response.text();
        })
        .then(function(text){
        });
        });
        */
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
    let library = [];
    library = objList.albums;
    for (let i = 0; i < library.length; i++) {
        if (library[i].pic == null || library[i].pic == "none") {
            var img = document.createElement('img');
            img.setAttribute("src", "./images/AlbumArt-01.png");
            img.classList.add("square");
            img.classList.add("albumType");
            img.setAttribute("id", library[i].pic);
            document.getElementById("mainAlbums").append(img);
        }
        else {
            var img = document.createElement('img');
            img.setAttribute("src" , library[i].pic);
            img.classList.add("square");
            img.classList.add("albumType");
            img.setAttribute("id" , library[i].pic);
            document.getElementById("mainAlbums").append(img);
            //console.log(img);
        }
    }
    albumButtons();
}

function albumButtons() {
    let library = [];
    library = objList.albums;
    for (let i = 0; i < library.length; i++) {
        if (library[i].pic == "./images/Logo1.png") {
            continue;
        }
        else {
            document.getElementById(library[i].pic).setAttribute('onclick' ,function changePlaying() {
                document.getElementById('currentAlbum').src=library[i];
            });
        }
    }
}

function addPlaylists() { 
    let img = document.createElement('img');
    img.setAttribute('onclick', function newPlaylist(){
        document.getElementById("mainPlaylist").append(img);
    });
    img.src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051_1280.png"
    img.classList.add("square");
    img.setAttribute("onclick" , "current()")
    document.getElementById("mainPlaylists").append(img);
}

function addArtists() { 
    // Remove duplicates and sort.
    let artists = Array.from(new Set(objList.artists)).sort();

    // Create table of artists.
    let artistTable = document.createElement('table');
    artistTable.classList.add("artistDisplay");
    for (artist of artists) {
        var row = document.createElement("tr");
        var datum = document.createElement("td");
        var artistNode = document.createTextNode(artist);

        datum.append(artistNode);
        row.append(datum);
        row.id = "artist-" + artist;
        artistTable.append(row);
    } 
    document.getElementById("mainArtists").append(artistTable);
}

function togglePlaying() {
    // Set play to 'on'.
    document.getElementById("pause").style.display = "inline";
    document.getElementById("play").style.display = "none";

    fetch(
        TEMP_API_LINK + 'play',
        { method: 'POST', mode: 'cors' }
    ).then((response) => {
        // (Flask should have printed)
        return response.text();
    }).then((text) => {
        currentlyPlaying();
        console.log('POST response: ');
        console.log(text);
    });
}

function toggleStopped() {
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "inline";

    fetch(
        TEMP_API_LINK + 'play',
        { method: 'POST', mode: 'cors' }
    ).then((response) => {
        console.log(response);
    });
}

function nextSong() {
    fetch(
        TEMP_API_LINK + 'next',
        { method: 'GET', mode: 'cors' }
    ).then((response) => {
        return response.text();
    }).then((text) => {
        currentlyPlaying();
        console.log('POST response: ');
        console.log(text);
    });
}

function prevSong() {
    fetch(
        TEMP_API_LINK + 'previous',
        { method: 'GET', mode: 'cors' }
    ).then((response) => { 
        return response.text();
    }).then((text) => {
        currentlyPlaying();
        console.log('GET response: ');
        console.log(text);
    });
}

function SetVolume(val) {
    let player = document.getElementById('vol-control');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);

    let asJSON = JSON.stringify({'volume':val});
    console.log(asJSON)

    fetch(
        TEMP_API_LINK + 'volume',
        {
            method: 'POST',
            mode: "cors",
            body: asJSON,
            headers: {
                "Content-Type": 'application/json'
            }
        }
    ).then((response) => {
        return response.text();
    }).then((text) => {
        console.log('POST reponse: ');
        console.log(text);
    });
}


function currentlyPlaying() {
    fetch(
        TEMP_API_LINK + 'get_current',
        { method: 'GET', mode: 'cors' }
    ).then((response) => {
        response.json().then(obj => {
            console.log(obj);
            console.log(obj.palette[0]);
            let r = obj.palette[0][0],
            g = obj.palette[0][1],
            b = obj.palette[0][2];
            document.getElementById('currentlyPlaying').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            if (obj.pic == '' || obj.pic == null || obj.pic == 'none') {
                document.getElementById('currentAlbum').setAttribute('src', "./images/AlbumArt-01.png");
            }
            else {
                document.getElementById('currentAlbum').setAttribute('src', obj.pic);
            }

            let currents = {
                returnCurrentSong:     obj.title,
                returnCurrentArtist:   obj.artist,
                returnCurrentDuration: secondsTo_MMSS(obj.duration),
                returnCurrentElapsed:  secondsTo_MMSS(obj.elapsed)
            };
            for (curr in currents)
                document.getElementById(curr).innerHTML = currents[curr];

            setInterval(currentlyPlaying(), 1000);
            setInterval(progressBar(obj), 500);
        });
    });
}

function progressBar(song) {
    let barPercent = (song.elapsed / song.duration) * 100;
    let bar = document.getElementById("progBar");
    bar.style.width = String(barPercent) + '%';
}

function secondsTo_MMSS(seconds) {
    let _pad = (value) => {
        if (value < 10) return '0' + value;
        else return value;
    }

    let durMin = seconds / 60,
        durSec = seconds % 60,
        durMin = durMin.toFixed(0),
        durSec = durSec.toFixed(0);

    durMinStr = String(_pad(durMin));
    durSecStr = String(_pad(durSec));
    return durMinStr + ':' + durSecStr;
}
