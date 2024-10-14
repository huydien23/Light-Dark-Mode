var swBtn = document.querySelector('label');
var body = document.querySelector('body');

function setMode() {
    var mode = localStorage.getItem('mode') ? 'dark' : '';
    body.setAttribute('class', mode);
}
setMode();

swBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    var mode = body.getAttribute('class') ? 'dark' : '';
    localStorage.setItem('mode', mode);
});