'use strict';

var promise = new Promise(function(resolve, reject) {
    document.addEventListener('DOMContentLoaded', function () {

        var elements = document.getElementsByTagName('*'),
            text = document.querySelector('.preload__text'),
            images = [],
            loadedItems = 0,
            loadedProgress = 0;

        [].forEach.call(elements, function (value, item, array) {

            var computedStyle = getComputedStyle(value);

            if (value.tagName === 'IMG' && value.src) images.push(value.src);
            if (computedStyle.backgroundImage && computedStyle.backgroundImage !== 'none') {

                var tpl = computedStyle.backgroundImage.replace('url("', '');
                tpl = tpl.replace('")', '');
                images.push(tpl);
            }
        });

        images.forEach(function (value) {

            var object = document.createElement('img');
            object.src = value;

            object.addEventListener('load', function () {

                loadedProgress = Math.round(++loadedItems / images.length * 100);
                text.innerText = loadedProgress + '%';

                if (loadedProgress >= 100) {

                    var element = document.querySelector('.preload');

                    fadeOut(element, 1000);
                    resolve();
                }
            });
        });
    });
});

promise.then(function() {

    var introSection = document.querySelector('section.intro');

    if(introSection) {
        var intro = new Intro();
        intro.init();
    }

    // use scroll.js file

    var targetToScrollDown = document.querySelector('#scroll-down'),
        targetToScrollUp = document.querySelector('#scroll-up'),
        header = document.querySelector('.header');

    if (targetToScrollDown) {
        targetToScrollDown.addEventListener('click',function(){
            scroll(header.offsetHeight);
        });
    }
    if (targetToScrollUp) {
        targetToScrollUp.addEventListener('click',function(){scroll(0)});
    }

});
