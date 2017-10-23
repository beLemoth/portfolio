
(function() {
  'use strict';

  var intro = document.querySelector('section.intro');
  if(intro){
      var checkbox = intro.querySelector('input.flip'),
          wrapper = document.querySelector('.intro__wrapper');

      intro.addEventListener('click',function () {
          if(event.target === intro || event.target === wrapper ) {
              console.log(checkbox);
              checkbox.checked = false;
          }
      });
  }

  // use scroll.js file

  var targetToScrollDown = document.querySelector('#scroll-down'),
      targetToScrollUp = document.querySelector('#scroll-up');

  if (targetToScrollDown) {
      targetToScrollDown.addEventListener('click',function(){scroll(window.innerHeight,false,0,1)});
  }
  if (targetToScrollUp) {
      targetToScrollUp.addEventListener('click',function(){scroll(0,true,0,20)});
  }

  //use carousel.js file

  if (carousel) {
      carouselInit();
      prevButton.addEventListener('click',function(){console.log('prev');prevItem()});
      nextButton.addEventListener('click',function(){console.log('next');nextItem()});
  }

})();
