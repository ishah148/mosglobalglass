export function start() {
    const issues = document.querySelectorAll('.issue__container');
    issues.forEach(i => i.addEventListener('click', toggleIssue))
    function toggleIssue(e) {
        if (e.target.classList.contains('show')) {
            e.target.classList.remove('show')
            e.target.querySelector('.accordion__arrow').classList.remove('accordion__rotate')
            return
        }
        closeAllIssues()
        e.target.classList.toggle('show')
        e.target.querySelector('.accordion__arrow').classList.toggle('accordion__rotate')
    }
    function closeAllIssues() {
        issues.forEach(i => i.classList.remove('show'))
        document.querySelectorAll('.accordion__arrow').forEach(i => i.classList.remove('accordion__rotate'));
    }
}