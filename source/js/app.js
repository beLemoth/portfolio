(function() {
  'use strict';

  function scrollDown() {
      var height = window.innerHeight;

      (function move() {
          var pageOffset = window.pageYOffset;
          window.scrollBy(0, 60);
          if (window.pageYOffset < height) {
              requestAnimationFrame(move);
          }
      })();
  }

  function scrollUp() {
      window.scrollTo(0,0);
  }



  document.querySelector('#scroll-down').addEventListener('click',scrollDown);
  document.querySelector('#scroll-up').addEventListener('click',scrollUp);


})();


