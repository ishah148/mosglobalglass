
const hamburger = document.querySelector('.hamburger');
const burgerMenuLinks = document.querySelectorAll('.burger-menu__link')
const blackout = document.querySelector('.blackout');
const burgerMenuListItems = document.querySelectorAll('.burger-menu__list-item'); // TODO add this to obj and use {}
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');
let laptopMinWidth = window.matchMedia("(min-width: 768px)");
function addMenu() {
    hamburger.classList.add('open-menu');
    body.classList.add('stop-scrolling');
    blackout.classList.add('visible');
    burgerMenu.classList.add('visible');
}

function closeMenu() {
    hamburger.classList.remove('open-menu');
    body.classList.remove('stop-scrolling');
    blackout.classList.remove('visible');
    burgerMenu.classList.remove('visible');
}


laptopMinWidth.addEventListener("change", function (laptopMinScreenSize) {
    if (laptopMinScreenSize.matches) {
        closeMenu();
    }
},{passive: true});


blackout.addEventListener("click", () => {
    closeMenu();
},{passive: true});

hamburger.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("open-menu")) {
        closeMenu();
    } else {
        addMenu();
    }
},{passive: true});

burgerMenuLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu());
},{passive: true});

burgerMenuListItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.classList.add("list-item--active");
    },{passive: true});
});

burgerMenuListItems.forEach((item) => {
    item.addEventListener("mouseout", () => {
        item.classList.remove("list-item--active");
    },{passive: true});
});


