const issues = document.querySelectorAll('.issue__container').forEach(i => i.addEventListener('click',toggleIssue))
function toggleIssue(e){
    e.target.classList.toggle('show')
    e.target.querySelector('.accordion__arrow').classList.toggle('accordion__rotate')
}