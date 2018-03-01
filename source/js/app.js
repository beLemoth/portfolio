
(function() {
  'use strict';

  var intro = document.querySelector('section.intro');
  if(intro){
      var checkbox = intro.querySelector('input.flip'),
          block = document.querySelector('.intro-block'),
          login = document.querySelector('.login');

      checkbox.checked = false;

      intro.addEventListener('click',function (event) {

          login.style.display = 'block';

          if(event.target === intro || event.target === block ) {
              checkbox.checked = false;
          }
      });
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

})();
