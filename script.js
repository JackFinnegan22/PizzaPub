const menu = document.querySelector('#toggle')
const menuLinks = document.querySelector('.menu')

// Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);