document.addEventListener('DOMContentLoaded', async () => {
    // const a1 = await import( "./hamburger.js");
    const telegram = await import("./tg_bot.js");
    const contact = await import("./contacts-window.js");
    const issues = await import("./issues.js");

    contact.start();
    issues.start();
    const tg = new telegram.TelegramSendMessage("contacts-window__form", "contacts-window__user-number", "contacts-window__button-send");
    // debugger
})