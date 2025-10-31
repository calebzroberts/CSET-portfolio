const header = document.getElementById("headerNav");
const triggerPoint = document.getElementById("about");

const triggerOffset = triggerPoint.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY > triggerOffset) {
        header.classList.add('hidden');
    }
    else
    {
        header.classList.remove('hidden');
    }
})