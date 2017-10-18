
function scroll(target,isUp,baseStep,speed) {

    baseStep = baseStep || 0;                       // default first step
    speed = speed || 3;                             // default step offset
    (function move(step) {
        window.scrollBy(0, step);

        step += (isUp) ? -speed : speed;            // negative step to scrollUp, other to scrollDown
        var pageOffset = window.pageYOffset;

        if (((pageOffset > target) && isUp) || ((pageOffset < target) && !(isUp))) {
            if ((((step+pageOffset)>target) && isUp) || (((step+pageOffset)<target) && !(isUp))) {requestAnimationFrame(function(){
                move(step);
            })} else {
                scrollTo(0,target);
            }
        }
    })(baseStep);
}
