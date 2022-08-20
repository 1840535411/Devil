let box = document.getElementById("box");
let html = document.documentElement || document.body;

window.onscroll = function () {
    if (html.scrollTop > 50) {
        box.style.opacity = 0.8;
    } else {
        box.style.opacity = 0;
    }
}

let timer = null, speed = 50;
box.onclick = function () {
    //html.scrollTop=0;
    if (timer == null) {
        timer = setInterval(function () {
            if (html.scrollTop <= 0) {
                clearInterval(timer);
                timer = null;
                html.scrollTop = 0;
                return;
            }
            html.scrollTop -= speed;
        }, 10)
    }
}
