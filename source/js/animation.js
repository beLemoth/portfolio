function fadeOut(element,speed) {
    element.style.opacity = element.style.opacity || 1;
    speed = (speed > 0) ? speed : 1000 || 1000;
    (function opacityDown() {
        element.style.opacity -= (60/speed);
        if (element.style.opacity > 0) {requestAnimationFrame(opacityDown);}
            else element.remove();
    })();
}

function fadeIn(element,speed) {
    element.style.opacity = 0;
    var opacity = 0;
    speed = (speed > 0) ? speed : 1000 || 1000;
    (function opacityUp() {
        opacity += (60/speed);
        element.style.opacity = opacity ;

        if (opacity < 1) {requestAnimationFrame(opacityUp);}
    })();
}

function moveTop(element,speed) {
    element.style.bottom = 0;
    element.style.top = 'auto';
    var bottom = 0;
    speed = (speed > 0) ? speed : 1000 || 1000;
    (function move() {
        bottom += (60/speed)*100;
        element.style.bottom = bottom + '%';
        console.log(bottom + 'b');
        if (bottom < 100) {requestAnimationFrame(move);}
            else element.remove();
    })();
}

function pushTop(element,speed) {
    element.style.bottom = 0;
    console.log(element.style.bottom);
    var bottom = 100;
    speed = (speed > 0) ? speed : 1000 || 1000;
    (function move() {
        bottom -= (60/speed)*100;
        element.style.bottom = bottom + '%';
        if (bottom > 0) {requestAnimationFrame(move);}
    })();
}

function moveDown(element,speed) {
    element.style.top = 0;
    element.style.top = 'auto';
    var top = 0;
    speed = (speed > 0) ? speed : 1000 || 1000;
    (function move() {
        top += (60/speed)*100;
        element.style.top = top + '%';
        if (top < 100) {requestAnimationFrame(move);}
            else element.remove();
    })();
}

function pushDown(element,speed) {
    element.style.top = 0;
    var top = 100;
    speed = (speed > 0) ? speed : 1000 || 1000;
    (function move() {
        top -= (60/speed)*100;
        element.style.top = top + '%';
        console.log(top);
        if (top > 0) {requestAnimationFrame(move);}
    })();
}