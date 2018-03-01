var blogAsideLabel = document.querySelector('.blog__aside-label');

if(blogAsideLabel && blogAsideLabel.style.display !== 'none') {

    var blogAside = blogAsideLabel.parentElement;

    document.addEventListener('click', function(event) {
        if(event.target === blogAsideLabel) blogAside.classList.toggle('active');
        else if(blogAside.classList.contains('active') && !blogAside.getElementsByClassName(event.target.className).length) {
            blogAside.classList.remove('active');
            }
    });

}