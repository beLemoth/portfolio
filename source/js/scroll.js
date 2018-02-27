
function scroll(target) {

    var baseStep = (target - window.pageYOffset)/80;

    (function move(step) {
        window.scrollBy(0, step);

        step += baseStep;
        var pageOffset = window.pageYOffset;

        if ((baseStep > 0 && pageOffset < target) || (baseStep < 0 && pageOffset > target)) {
            requestAnimationFrame(function() {
                if((baseStep > 0 && (step+pageOffset)<target) || (baseStep < 0 && (step+pageOffset)>target)) move(step);
                else scrollTo(0,target);
            })
        }
    })(baseStep);
}
