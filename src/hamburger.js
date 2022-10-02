
renderBurger()
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

function renderBurger(){
    const root = document.getElementById('burger-menu')
    root.insertAdjacentHTML('beforeend',generateBurgerHTML())
}

function generateBurgerHTML(){
    return `
    <div class="burger-menu">
    <div class="burger-menu__logo">
        <!-- <svg class="svg-icon burger-menu__svg" target="_blank">
            <use xlink:href="../assets/svg/burger_sprite.svg#burger"></use>
        </svg> -->
        <!-- <img width ='50px' height='50px' class="burger-menu__svg" src="../assets/images/Farba_logo_w.svg" alt="logo"> -->
    </div>
    <div class="burger-menu__contacts">
        <div class="contacts">
            <ul>
                <li>+74959914056</li>
                <li>+79104458483</li>
            </ul>
        </div>
    </div>
    <nav class="burger-menu__content">
        <ul class="burger-menu__list">
            <li class="burger-menu__list-item">
                <a class="burger-menu__link" href="#portfolio-section">Главная</a>
            </li>
            <li class="burger-menu__list-item">
                <a class="burger-menu__link" href="#threeD-section">
                    Стоимость замены</a>
            </li>
            <li class="burger-menu__list-item">
                <a class="burger-menu__link" href="#video-section">Стоимость ремонта автостекла</a>
            </li>
            <li class="burger-menu__list-item">
                <a class="burger-menu__link" href="#contacts-section">Контакты</a>
            </li>
        </ul>
    </nav>
</div>
    `
}