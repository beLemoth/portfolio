

var blogAside = document.querySelector('.blog__aside'),
    blogTitles = blogAside.firstElementChild;

var isFixed = false;

window.addEventListener('scroll', function(){
    var blogAsideTop = blogAside.getBoundingClientRect().top;

    if(blogAsideTop < 0 && !isFixed) {
        blogTitles.classList.add('fix');
        isFixed = true;
    } else if (blogAsideTop > 0 && isFixed) {
        blogTitles.classList.remove('fix');
        isFixed = false;
    }
});


