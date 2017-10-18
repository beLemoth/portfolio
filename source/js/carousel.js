(function() {

    var carouselItems = [
        {
            "title": "Сайт школы онлайн образования",
            "desc": "HTML, CSS, JAVASCRIPT",
            "link": "https://loftschool.com/",
            "image": "./assets/img/work-1.png"
        },
        {
            "title": "Агентство интернет-решений",
            "desc": "Продвижение, дизайн, менеджмент",
            "link": "https://itloft.ru/",
            "image": "./assets/img/work-2.png"
        },
        {
            "title": "Сайт школы онлайн образования",
            "desc": "HTML, CSS, JAVASCRIPT",
            "link": "https://loftschool.com/",
            "image": "./assets/img/work-3.png"
        },
        {
            "title": "Агентство интернет-решений",
            "desc": "Продвижение, дизайн, менеджмент",
            "link": "https://itloft.ru/",
            "image": "./assets/img/work-4.png"
        }
    ];

    var carousel = document.querySelector('.carousel'),
        prevButton = carousel.querySelector('.carousel-control__prev'),
        nextButton = carousel.querySelector('.carousel-control__next'),
        preview = carousel.querySelector('.carousel-preview'),
        itemTitle = carousel.querySelector('.carousel-link__title'),
        itemDesc = carousel.querySelector('.carousel-link__desc'),
        itemLink = carousel.querySelector('.carousel-link__link'),
        activeItem = 0;

    function createPreviewImage(item) {
        item = (item<0) ? carouselItems.length-1 : item || 0;
        var block = document.createElement('div'),
            img = document.createElement('img');

        block.className = "carousel-preview__image";
        img.src = carouselItems[item].image;
        block.appendChild(img);
        return block;
    }

    console.log(carouselItems.length);

    function carouselInit() {
        var activeImg = createPreviewImage(activeItem),
            prevImg = createPreviewImage(activeItem-1),
            nextImg = createPreviewImage(activeItem+1);

        preview.appendChild(prevImg);
        preview.appendChild(activeImg);
        preview.appendChild(nextImg);

        itemTitle.innerText = carouselItems[activeItem].title;
        itemDesc.innerText = carouselItems[activeItem].desc;

        itemLink.href = carouselItems[activeItem].link;
    }

    carouselInit();


    function back() {

    }

    prevButton.addEventListener('click',function(){console.log('prev')});
    nextButton.addEventListener('click',function(){console.log('next')});


})();



