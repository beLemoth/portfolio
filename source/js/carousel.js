var carousel = document.querySelector('.carousel');

if (carousel) (function(){

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
    ],
        prevButton = carousel.querySelector('.carousel-control__prev'),
        nextButton = carousel.querySelector('.carousel-control__next'),
        preview = carousel.querySelector('.carousel-preview'),
        itemTitle = carousel.querySelector('.carousel-link__title'),
        itemDesc = carousel.querySelector('.carousel-link__desc'),
        itemLink = carousel.querySelector('.carousel-link__link'),
        activeItem = 0,
        length = carouselItems.length;


    function createImage(item,className) {
        className = className || "carousel-preview";
        item = (item<0) ? (length+item) :
            (item === length) ? 0 : item || 0;
        var block = document.createElement('div'),
            img = document.createElement('img');

        block.className = className + "__image";
        img.src = carouselItems[item].image;
        block.appendChild(img);
        return block;
    }

    function carouselInit(speed) {
        speed = speed || 1000;
        fadeIn(preview.appendChild(createImage(activeItem)));
        pushTop(prevButton.appendChild(createImage(activeItem-1,'carousel-control')),speed);
        pushDown(nextButton.appendChild(createImage(activeItem+1,'carousel-control')),speed);

        itemTitle.innerText = carouselItems[activeItem].title;
        itemDesc.innerText = carouselItems[activeItem].desc;
        itemLink.href = carouselItems[activeItem].link;
    }

    function carouselReload(speed) {
        speed = speed || 1000;
        fadeOut(preview.querySelector(".carousel-preview__image",speed));
        moveDown(prevButton.querySelector(".carousel-control__image",speed));
        moveTop(nextButton.querySelector(".carousel-control__image",speed));
        var timer = setTimeout(function() {
            carouselInit(speed*2);
        }, speed);
    }

    function nextItem() {
        activeItem = (++activeItem === length) ? 0 : activeItem;
        console.log(activeItem);
        carouselReload(300);
    }

    function prevItem() {
        activeItem = (activeItem) ? --activeItem : length-1;
        console.log(activeItem);
        carouselReload(300);
    }

    carouselInit(500);
    prevButton.addEventListener('click',function(){prevItem()});
    nextButton.addEventListener('click',function(){nextItem()});

})();



