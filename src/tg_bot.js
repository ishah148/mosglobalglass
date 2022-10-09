class TelegramSendMessage {
    constructor(formID, inputId, buttonId) {
        this.formID = formID;
        this.form = document.getElementById(this.formID);
        this.input = document.getElementById(inputId)
        this.button = document.getElementById(buttonId)
        this.init();
    }
    init() {
        // this.createForm();
        this.addEvents()
    }
    async telegramSendMsg(...msg) {
        const TOKEN = "5361160702:AAGxhL7FLmkx1lhsLziBbqSpKkGZHickzL0";
        // const CHAT_ID = "-1001704317062";
        // const TOKEN = "5744341470:AAEtvvW5czonXfe8hb9KUIVcKjjtAS1MxAA";
        const CHAT_ID = "-1001869219973";
        const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        const query = {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: ` Имя: ${msg[0]} \nНомер телефона : ${msg[1]} \nСообщение: ${msg[2]}`,
            }),
        }
        try {
            const response = await fetch(URL, query);

            const status = await response.json();
            // 
            if (status.ok) {
                this.sendDode()
            }
            if (!status.ok) {
                this.sendErr()
            }
        } catch (e) { this.sendErr() }
    }

    addEvents() {
        // this.testForBtn.onclick = this.testOne.bind(this.testForBtn,this)
        this.form.onsubmit = this.sumbit.bind(document.getElementById(this.formID), this);
        this.input.oninput = (e) => { this.checkValidPhone(e) }
    }

    sumbit(...args) {
        const event = args[1]
        const thisClass = args[0]
        event.preventDefault();
        if (thisClass.checkValidSubmit(this.userNumber.value)) {
            thisClass.telegramSendMsg(this.userName.value, this.userNumber.value, this.userText.value)
        }
    }

    //TODO
    checkValidPhone(e) {
        let number = e.target.value;

        this.checkValidSubmit(number)
    }
    checkValidSubmit(number) {
        if (!number || number.toString().length > 25 || number.toString().length < 8) {
            // please input correct number
            this.incorrectInput();
            return false;
        }
        this.correctInput();
        return true
    } // от 8 до 25 и не буквы ()-+ пробелы
    sendDode() {
        this.button.textContent = "ЗАЯВКА ОТПРАВЛЕНА"
        this.button.classList.add('sended')
        setTimeout(() => {
            this.button.classList.remove('sended')
            this.button.textContent = "ЗАКАЗАТЬ ЗВОНОК"
        }, 1500);
    }
    sendErr() {
        this.button.textContent = "ОШИБКА ОТПРАВКИ"
        this.button.classList.add('error')
        setTimeout(() => {
            this.button.classList.remove('error')
            this.button.textContent = "ЗАКАЗАТЬ ЗВОНОК"
        }, 1500);
    }

    incorrectInput() {
        this.input.classList.add('error')
    }
    correctInput() {
        this.input.classList.remove('error')
        this.input.classList.add('good')
    }
    createForm() {
        const form = `  
        <form method="post" id="${this.formID}">
            <label>Имя</label><br>
            <input type="text" name="userName" /><br><br>
            <label>Номер</label><br>
            <input type="number" name="userNumber" /><br><br>
            <input type="submit" value="Отправить" />
            </form><br><br>`;
        document
            .getElementById(this.where)
            .insertAdjacentHTML("beforeend", form);
    }
}

// const tg = new TelegramSendMessage("newForm", "newFormID");
const tg = new TelegramSendMessage("contacts-window__form", "contacts-window__user-number", "contacts-window__button-send");