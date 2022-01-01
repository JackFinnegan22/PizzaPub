const menu = document.querySelector('#toggle');
const menuLinks = document.querySelector('.menu');;
const navLogo = document.querySelector('.title');

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

var slideimg = document.querySelector('.slideimg');
var mainArea = document.querySelector('.mainarea');




//Show Active Menu When Scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#homepage');
    const aboutMenu = document.querySelector('#aboutpage');
    const foodMenu = document.querySelector('#foodpage');
    const orderMenu = document.querySelector('#orderpage');
    const contactMenu = document.querySelector('#contactpage');
    const galleryMenu = document.querySelector('#gallerypage');

    let scrollPos = window.scrollY;
     
    if (window.innerWidth > 1200 && scrollPos < 550) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1200 && scrollPos < 1100) {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        foodMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1200 && scrollPos < 6490) {
        aboutMenu.classList.remove('highlight');
        foodMenu.classList.add('highlight');
        orderMenu.classList.remove('highlight');
        return;
    }  else if (window.innerWidth > 1200 && scrollPos < 7230) {
        foodMenu.classList.remove('highlight');
        orderMenu.classList.add('highlight');
        contactMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1200 && scrollPos < 7700) {
        orderMenu.classList.remove('highlight');
        contactMenu.classList.add('highlight');
        galleryMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 1200 && scrollPos > 7800) {
        contactMenu.classList.remove('highlight');
        galleryMenu.classList.add('highlight');
        return;
    }  else {
        return;
    }

    console.log(scrollPos);
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 675 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);