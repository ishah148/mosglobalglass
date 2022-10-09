// // function messageWindowEvents(){}
const blackOut = document.querySelector('.blackout');
const root = document.getElementById('connect-window')
feedbackBtn = document.getElementById('feedback')
root.insertAdjacentHTML('beforeend',generateCallMe())
const msgSelectors = [
    ".contacts-window__container",
    ".contacts-window__wrapper",
];

document.querySelector(".contacts-window__callback-bt").onclick = openMessageWindow;
feedbackBtn.onclick = openMessageWindow;
function openMessageWindow() {
    this.classList.add('hidden')
    hiddenMaps()
    msgSelectors.forEach((selector) =>
        document.querySelector(selector).classList.toggle("open")
    );
    blackOut.classList.toggle("visible");
    document.querySelector(".contacts-window__wrapper").addEventListener('click', (e) => {
        if (e.target.classList.contains('contacts-window__wrapper')) closeMessageWindow()
    }, { passive: true })
}
function closeMessageWindow() {
    document.querySelector(".contacts-window__callback-bt").classList.remove('hidden')
    showMaps()
    msgSelectors.forEach((selector) =>
        document.querySelector(selector).classList.remove("open")
    );
    blackOut.classList.remove("visible");
    document.querySelector(".contacts-window__wrapper").removeEventListener('click', closeMessageWindow)
}

blackOut.addEventListener("click", () => {
    closeMessageWindow();
}, { passive: true });

function generateCallMe() {
    return `
    <div class="contacts-window__wrapper">
    <div class="contacts-window__container">
        <div class="contacts-window__connect">
            <h2 class="contacts-window__h2">МЫ НА СВЯЗИ</h2>
            <div class="contacts-window__icons-container">


                <a href="https://wa.me/%2B375259041736" target="_blank">
                    <svg class="contacts-window__svg-contact">
                        <use xlink:href="../src/assets/sprites/contactsSprite.svg#whatsapp"></use>
                    </svg>
                </a>
                <a href="https://telegram.me/IgorTg123" target="_blank">
                    <svg class="contacts-window__svg-contact">
                        <use xlink:href="../src/assets/sprites/contactsSprite.svg#telegram"></use>
                    </svg>
                </a>
                <a href="tel:+375259041736">
                    <svg class="contacts-window__svg-contact contacts-window__svg-contact--phone">
                        <use xlink:href="../src/assets/sprites/contactsSprite.svg#telephone-outbound"></use>
                    </svg>
                </a>

            </div>
            <div class="contacts-window__phone-container">
                <svg class="contacts-window__vibration-icon">
                    <use xlink:href="../src/assets/sprites/contactsSprite.svg#phone-vibrate"></use>
                </svg>
                <h2 class="contacts-window__h2">8945 123 132 13</h2>
                <!-- <h2 class="contacts-window__h2">8945 123 132 13</h2> -->
            </div>
        </div>
        <div class="contacts-window__order-call">
            <form method="post" id="contacts-window__form" class="contacts-window__form">

                <input type="text" name="userName" placeholder="Имя" />
                <input id="contacts-window__user-number" class="contacts-window__user-number" type="tel"
                name="userNumber" placeholder="Номер" min="8" max="25" />
                <textarea type="text" class='contacts-window__msg-text' name="userText" placeholder="Оставьте Ваше сообщение..." /></textarea>
                <button id="contacts-window__button-send" class="contacts-window__button-send">ЗАКАЗАТЬ
                    ЗВОНОК</button>
            </form>
        </div>
        <div class="contacts-window__text-me">
            <h2 class="contacts-window__h2">НАПИСАТЬ</h2>
            <a href="mailto:123@gmail.com" target="_blank">
                <div class="contacts-window__decorate-border-container"></div>
                <div class="contacts-window__border-test decore--up"></div>
                <div class="contacts-window__border-test decore--down"></div>
                <div class="contacts-window__border-main">123@gmail.com
                </div>
                <!-- <div class="contacts-window__border"></div>  -->
            </a>
        </div>
    </div>
</div>

<button class="contacts-window__callback-bt">
    <div class="contacts-window__text-call">
        <div class="fa fa-phone"></div>
        <div class="text">МЫ НА<br>СВЯЗИ</div>
    </div>
</button>
    `
}


function showMaps(){
    document.querySelector('.main__maps').classList.remove('main__maps--hidden')
}
function hiddenMaps(){
    document.querySelector('.main__maps').classList.add('main__maps--hidden')
}
