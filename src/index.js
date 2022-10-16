document.addEventListener('DOMContentLoaded', async () => {
    // const a1 = await import( "./hamburger.js");
    const telegram = await import("./tg_bot.js");
    const contact = await import("./contacts-window.js");
    const issues = await import("./issues.js");
    const fullSize = await import("./FullSizeViewer.js")
    issues.start();
    contact.start();
    const tg = new telegram.TelegramSendMessage("contacts-window__form", "contacts-window__user-number", "contacts-window__button-send");
    document.getElementById('ya-maps').insertAdjacentHTML('beforeend', getYaMapsHTML())
    document.getElementById('photos-wrapper').insertAdjacentHTML('beforeend', getPhotosHTML())
    handleFullSizeEvents(fullSize);
})

function handleFullSizeEvents(fsModule) {
    const fullSize = fsModule;
    document.querySelectorAll('.photos__replace-container img').forEach(i => i.addEventListener('click', () => {
        console.log('fs', fullSize)
        const number = i.dataset.number
        const fs = new fullSize.FullSizeViewer(number, "./assets/work_examples_full")
    }))
}

function getYaMapsHTML() {
    return `
    <iframe
        title="maps"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A889e3511d7b7d2b56b4b5719270c7ccc293d2c2b47192026eb39cfeb71a7f284&amp;source=constructor"
        loading="lazy">      
    </iframe>
    `
}

function getPhotosHTML() {
    return `
    <section class="photos__wrapper">
            <h2 class="photos__header">Примеры работ</h2>
            <div class="photos__container">
                <div class="photos__replace-container">
                    <div class="photos__replace-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/work_examples/1.webp" alt="car-photo" data-folder="./assets/work_examples_full" data-number="1" ></div>
                    <div class="photos__replace-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/work_examples/2.webp" alt="car-photo" data-folder="./assets/work_examples_full" data-number="2"></div>
                    <div class="photos__replace-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/work_examples/3.webp" alt="car-photo" data-folder="./assets/work_examples_full" data-number="3"></div>
                    <div class="photos__replace-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/work_examples/4.webp" alt="car-photo" data-folder="./assets/work_examples_full" data-number="4" ></div>
                </div>
                <div class="photo__restope-container">
                    <p class="restope-container__before">До</p>
                    <p class="restope-container__after">После</p>
                    <div class="photos__restope-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/skols/2.webp" alt="car-photo" data-></div>
                    <div class="photos__restope-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/skols/1.webp" alt="car-photo"></div>
                     <div class="photos__restope-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/skols/4.webp" alt="car-photo"></div>
                    <div class="photos__restope-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/skols/3.webp" alt="car-photo"></div>
                </div>
            </div>
            <div class="modal-window__wrapper">
            <div class="modal-window__mouse area-left">
                <button class="modal-window__left-button">
                    <svg class="modal-window__arrow-left">
                        <use xlink:href="./assets/svg/sprite.svg#arrow-left"></use>
                    </svg>
                </button>
            </div>
            <div class="modal-window__mouse area-right">
                <button class="modal-window__right-button">
                    <svg class="modal-window__arrow-right">
                        <use xlink:href="./assets/svg/sprite.svg#arrow-right"></use>
                    </svg>
                </button>
            </div>
            <button class="modal-window__close-button main">
                <svg class="modal-window__cross">
                    <use xlink:href="./assets/svg/sprite.svg#cross"></use>
                </svg>
            </button>
        </div>
        </section>
    `
}