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

window.onload = () => {
  (function createMenuItems() {
    let mnt = document.getElementById('menu-mnt');
    for (item of menuItems) {
      let el = document.createElement('i');
      for (attr in item) {
        el[attr] = item[attr];
        el.onmouseover = () => { el.style.backgroundColor = "#4f4f4f"; }
        el.onmouseout = () => { el.style.backgroundColor = "transparent"; }
        el.style.fontFamily = 'Azonix';
      }
      mnt.appendChild(el);
    }
  })();
}