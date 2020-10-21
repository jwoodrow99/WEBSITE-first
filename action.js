
function toggleFlash(message) {
    let el = document.getElementById("flash");
    el.innerHTML = message;

    el.classList.add('flash-show');

    window.setTimeout(() => {
        el.classList.remove('flash-show');
    }, 3000);
}