function createMenuItems() {
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
};