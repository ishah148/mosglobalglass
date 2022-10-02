import "./hamburger.js";
import "./tg_bot";
import "./contacts-window.js";

import TelegramSendMessage from "./tg_bot.js";
const tg = new TelegramSendMessage("contacts-window__form","contacts-window__user-number","contacts-window__button-send");