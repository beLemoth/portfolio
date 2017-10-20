function fadeOut(element,speed) {
    element.style.opacity = element.style.opacity || 1;
    opacity = 1;
    speed = (speed > 0) ? speed : 1000 || 1000;
    (function opacityDown() {
        element.style.opacity -= (60/speed);
        if (element.style.opacity > 0) {requestAnimationFrame(opacityDown);}
            else element.style.display = 'none';
    })();
}

function fadeIn(element,speed) {
    element.style.opacity = 0;
    element.style.display = 'block';
    speed = (speed > 0) ? speed : 1000 || 1000;
    (function opacityUp() {
        element.style.opacity += (60/speed);
        if (element.style.opacity < 1) {requestAnimationFrame(opacityUp);}
    })();
}