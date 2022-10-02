// // function messageWindowEvents(){}
const blackOut = document.querySelector('.blackout');
const msgSelectors = [
    ".contacts-window__container",
    ".contacts-window__wrapper",
];

document.querySelector(".contacts-window__callback-bt").onclick = openMessageWindow;
function openMessageWindow() {
    this.classList.add('hidden')
    msgSelectors.forEach((selector) =>
        document.querySelector(selector).classList.toggle("open")
    );
    blackOut.classList.toggle("visible");
    document.querySelector(".contacts-window__wrapper").addEventListener('click',(e)=>{
            if(e.target.classList.contains('contacts-window__wrapper')) closeMessageWindow()
    },{passive: true})
}
function closeMessageWindow(){
    document.querySelector(".contacts-window__callback-bt").classList.remove('hidden')
    msgSelectors.forEach((selector) =>
        document.querySelector(selector).classList.remove("open")
    );
    blackOut.classList.remove("visible");
    document.querySelector(".contacts-window__wrapper").removeEventListener('click',closeMessageWindow)
}

blackOut.addEventListener("click", () => {
    closeMessageWindow();
},{passive: true});