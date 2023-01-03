const container = document.querySelector(".container");
const Header = document.querySelector(".nav-header");
const Tog = document. querySelector(".nav-tog");
const menuOpened = document.querySelector('.menu-icon');
const menuClosed = document.querySelector('.menu-close');


menuOpened.addEventListener('click', function(){
    Tog.style.display = "block"
    menuClosed.style.display = "block"
    menuOpened.style.display = "none"
});

menuClosed.addEventListener('click', function(){
    Tog.style.display = "none"
    menuOpened.style.display = "block"
    menuClosed.style.display = "none"
});

