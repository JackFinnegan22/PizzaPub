const menu = document.querySelector('#toggle')
const menuLinks = document.querySelector('.menu')

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

var slideimg = document.querySelector('.slideimg');
var mainArea = document.querySelector('.mainarea');

function mainHeight() {
    var imgHeight = slideimg.height;
    mainArea.style.height = imgHeight;
}
mainHeight();




function scrollToSection(event) {
    if (supportsSmoothScrolling()) {
      return;
    }
    event.preventDefault();
    const scrollToElem = document.getElementById("section");
    SmoothVerticalScrolling(scrollToElem, 300, "top");
  }
  
  function supportsSmoothScrolling() {
    const body = document.body;
    const scrollSave = body.style.scrollBehavior;
    body.style.scrollBehavior = 'smooth';
    const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
    body.style.scrollBehavior = scrollSave;
    return hasSmooth;
  };
   
  function SmoothVerticalScrolling(element, time, position) {
    var eTop = element.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
      window.setTimeout(SVS_B, curTime, eAmt, position);
      curTime += time / 100;
    }
  }
  
  function SVS_B(eAmt, position) {
    if (position == "center" || position == "")
    window.scrollBy(0, eAmt / 2);
    if (position == "top")
    window.scrollBy(0, eAmt);
  }