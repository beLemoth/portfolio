
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
}

function fadeIn(element,speed,delay,easing) {
    speed = (speed > 0) ? speed : 1000 || 1000;
    delay = delay || 0;
    easing = easing || 'ease-out';
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

function moveTop(element,speed,delay,easing) {
    speed = (speed > 0) ? speed : 1000 || 1000;
    delay = delay || 0;
    easing = easing || 'ease-out';
    element.animate(
        [
            {bottom: 0+'%'},
            {bottom: 100+'%'}
        ],
        {
            delay: delay,
            duration: speed
        }
    );
}

function moveDown(element,speed,delay,easing) {
    speed = (speed > 0) ? speed : 1000 || 1000;
    delay = delay || 0;
    easing = easing || 'ease-out';
    element.animate(
        [
            {top: 0+'%'},
            {top: 100+'%'}
        ],
        {
            delay: delay,
            duration: speed
        }
    );
}

function pushTop(element,speed,delay,easing) {
    console.log(element, element.style.top);
    speed = (speed > 0) ? speed : 1000 || 1000;
    delay = delay || 0;
    easing = easing || 'ease-out';
    element.animate(
        [
            {bottom: 100+'%'},
            {bottom: 0+'%'}
        ],
        {
            delay: delay,
            duration: speed
        }
    );
}


function pushDown(element,speed,delay,easing) {
    speed = (speed > 0) ? speed : 1000 || 1000;
    delay = delay || 0;
    easing = easing || 'ease-out';
    element.animate(
        [
            {top: 100 + '%'},
            {top: 0 + '%'}
        ],
        {
            delay: delay,
            duration: speed
        }
    )
}