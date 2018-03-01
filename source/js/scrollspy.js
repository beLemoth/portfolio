
var blog = document.querySelector('section.blog');

if (blog) {
    var blogAside = document.querySelector('.blog__aside'),
        blogTitles = blogAside.firstElementChild,
        blogArticles = document.querySelectorAll('.blog-article');

    var activeArticle = blogArticles[0];

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

        [].forEach.call(blogArticles, function(article){
            var articlePosition = article.getBoundingClientRect().top;

            if(articlePosition < window.innerHeight*0.4){
                if(activeArticle !== article) {
                    document.getElementById(activeArticle.dataset.number).classList.remove('active');
                    document.getElementById(article.dataset.number).classList.add('active');
                    activeArticle = article;
                }
            }
        })
    });

    blogAside.addEventListener('click', function(event) {
        if(event.target.className === 'blog-titles__text') {
            var articleNumber = event.target.parentElement.id;
            [].forEach.call(blogArticles, function(article){
                if(article.dataset.number === articleNumber) {
                    scroll(article.offsetTop+blog.offsetTop);
                }
            });
        }
    });
}


