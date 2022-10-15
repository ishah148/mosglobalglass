document.addEventListener('DOMContentLoaded', async () => {
    // const a1 = await import( "./hamburger.js");
    const telegram = await import("./tg_bot.js");
    const contact = await import("./contacts-window.js");
    const issues = await import("./issues.js");
    issues.start();
    contact.start();
    const tg = new telegram.TelegramSendMessage("contacts-window__form", "contacts-window__user-number", "contacts-window__button-send");
    document.getElementById('ya-maps').insertAdjacentHTML('beforeend', getYaMapsHTML())
    document.getElementById('photos-wrapper').insertAdjacentHTML('beforeend', getPhotosHTML())
})

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
                            src="./assets/work_examples/62508.webp" alt="car-photo"></div>
                    <div class="photos__replace-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/work_examples/70859.webp" alt="car-photo"></div>
                    <div class="photos__replace-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/work_examples/IMG_4029.webp" alt="car-photo"></div>
                    <div class="photos__replace-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/work_examples/88178.webp" alt="car-photo"></div>
                </div>
                <div class="photo__restope-container">
                    <p class="restope-container__before">До</p>
                    <p class="restope-container__after">После</p>
                    <div class="photos__restope-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/skols/2.webp" alt="car-photo"></div>
                    <div class="photos__restope-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/skols/1.webp" alt="car-photo"></div>
                    <div class="photos__restope-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/skols/3.webp" alt="car-photo"></div>
                    <div class="photos__restope-photo"><img loading="lazy" width="600" height="450"
                            src="./assets/skols/4.webp" alt="car-photo"></div>
                </div>
            </div>
        </section>
    `
}