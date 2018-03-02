
function fadeOut(element,speed,delay,easing) {
    speed = (speed > 0) ? speed : 1000 || 1000;
    delay = delay || 0;
    easing = easing || 'ease-out';
    element.animate(
        [
            {opacity:1},
            {opacity:0}
        ],
        {
            delay: delay,
            duration: speed
        }

    );
    setTimeout(function(){
        element.style.display = 'none';
    }, speed);

}

function fadeIn(element,speed,delay,easing) {
    speed = (speed > 0) ? speed : 1000 || 1000;
    delay = delay || 0;
    easing = easing || 'ease-out';

    element.style.display = '';

    element.animate(
        [
            {opacity:0},
            {opacity:1}
        ],
        {
            delay: delay,
            duration: speed
        }
    );
}

function blurIn(element,text,speed) {
    speed = speed || 1000;
    var letter = text;
    var duration = speed/3;
    var str = '';
    var delay = 0;
    for (l = 0; l < letter.length; l++) {
        if (letter[l] != ' ') {
            str += '<span style="animation-delay:'+delay+'ms; -moz-animation-delay:'+delay+'ms; -webkit-animation-delay:'+delay+'ms;';
            str += 'animation-duration:'+duration+'ms; -moz-animation-duration:'+duration+'ms; -webkit-animation-duration:'+duration+'ms; ">';
            str += letter[l]+'</span>';
            delay += speed/letter.length;
        } else
            str += letter[l];
    }
    element.innerHTML = str;
}