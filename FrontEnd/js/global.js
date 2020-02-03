const TEMP_API_LINK = 'http://localhost:5000/api/';

var objList;

var postInit = {
    functionalSetups: [
        fetchAllSongs,
        currentlyPlaying,
        addAlbums,
        addPlaylists,
        addArtists,
        generateLibrary
    ],
    displaySetups: [
        createMenuItems
    ]
};
window.onload = () => {
    for (setupstr in postInit) {
        setup = postInit[setupstr];
        for (let i = 0; i < setup.length; i++)
            setup[i]();
    }
}

// Controls what the main display is showing.
var openController = {
    elements: [
        'mainSearch',
        'mainPlaylists',
        'mainArtists',
        'mainAlbums'
    ],
    currOpen: 'mainSearch',

    // Generates a function that opens menu item 'element'.
    open: function(element) {
        return () => {
            this.element = element;
            if (!openController.elements.includes(element))
                console.log("Err: " + element + " can not be opened.");
            else if (element !== openController.currOpen) {
                // Hides the currently opened display.
                console.log("Closing " + openController.currOpen + ".");
                document.getElementById(openController.currOpen).style.display = "none";
                // Shows the respective display.
                console.log("Opening " + this.element + ".");
                document.getElementById(element).style.display = "block";
                // Updates as the new currently opened element.
                openController.currOpen = element;
            }
            else console.log(element + " is already opened.");
        };
    }
}

/* Items displayed on the menu.
 * NOTE: Each property of an object corresponds to that of a DOM object.
 *       This means that the HTML directly represents what is in this array.
 */
var menuItems = [
    {
        innerHTML: 'Songs',
        className: 'songSearch navigation-bar',
        href: '#',
        onclick: openController.open('mainSearch'),
    },
    {
        innerHTML: 'Albums',
        className: 'albums navigation-bar',
        href: '#',
        onclick: openController.open('mainAlbums'),
    },
    {
        innerHTML: 'Playlists',
        className: 'playlist navigation-bar',
        href: '#',
        onclick: openController.open('mainPlaylists'),
    },
    {
        innerHTML: 'Artists',
        className: 'artists navigation-bar',
        href: '#',
        onclick: openController.open('mainArtists'),
    },
];