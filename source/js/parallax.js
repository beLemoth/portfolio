var header = document.querySelector('.header') || document.querySelector('.header-blog');

if (header) {
    var position = header.style.backgroundPositionY;
    window.addEventListener('scroll',function() {
        var offset = window.pageYOffset;
        //console.log(position, offset);
        //header.style.backgroundPositionY = position + offset/2 + 'px';
    });
}
