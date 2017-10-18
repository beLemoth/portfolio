
(function() {
  'use strict';

  var targetToScrollDown = document.querySelector('#scroll-down'),
      targetToScrollUp = document.querySelector('#scroll-up');

  if (targetToScrollDown) {
      targetToScrollDown.addEventListener('click',function(){scroll(window.innerHeight,false,0,13)});
  }
  if (targetToScrollUp) {
      targetToScrollUp.addEventListener('click',function(){scroll(0,true,0,20)});
  }

})();
