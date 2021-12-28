const menu = document.querySelector('#toggle')
const menuLinks = document.querySelector('.menu')

// Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


var pic = document.querySelector('#slideimg');
var layer = document.querySelector('.layer');

function layerHeight() {
    var picHeight = pic.height;
    layer.style.height = picHeight;
}

layerHeight();