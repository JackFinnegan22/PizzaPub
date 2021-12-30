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

/* Main Area Height */

var slideimg = document.querySelector('.slideimg');
var mainArea = document.querySelector('.mainarea');

function mainHeight() {
    var imgHeight = slideimg.height;
    mainArea.style.height = imgHeight;
}

mainHeight();


/* Contact Form Javascript */


