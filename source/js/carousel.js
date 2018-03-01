
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
        length = carouselItems.length,

        inMove = false;

    function item(number) {
        return number = (number<0) ? (length+number) :
            (number === length) ? 0 : number;
    }

    function createImage(item,className) {
        className = className || "carousel-preview";

        var block = document.createElement('div'),
            img = document.createElement('img');

        block.className = className + "__image";
        img.src = carouselItems[item].image;
        block.appendChild(img);
        return block;
    }

    function carouselBuild(speed) {
        speed = speed || 1000;
        blurIn(itemTitle, carouselItems[activeItem].title, speed);
        blurIn(itemDesc, carouselItems[activeItem].desc, speed);
        itemLink.href = carouselItems[activeItem].link;
    }

    function carouselInit() {
        preview.appendChild(createImage(activeItem));
        prevButton.appendChild(createImage(item(activeItem-1),'carousel-control'));
        nextButton.appendChild(createImage(item(activeItem+1),'carousel-control'));

        carouselBuild();
    }

    function carouselChange(speed) {
        speed = speed || 1000;
        var halfSpeed = speed/2;
        var previewImage = preview.querySelector(".carousel-preview__image"),
            prevButtonImage = prevButton.querySelector(".carousel-control__image"),
            nextButtonImage = nextButton.querySelector(".carousel-control__image");

        inMove = true;

        fadeOut(previewImage,halfSpeed);
        fadeOut(prevButtonImage,halfSpeed);
        fadeOut(nextButtonImage,halfSpeed);

        carouselBuild(speed);

        setTimeout(function(){
          previewImage.querySelector('img').src = carouselItems[activeItem].image;
            prevButtonImage.querySelector('img').src = carouselItems[item(activeItem-1)].image;
            nextButtonImage.querySelector('img').src = carouselItems[item(activeItem+1)].image;
            fadeIn(previewImage,halfSpeed);
            fadeIn(prevButtonImage,halfSpeed);
            fadeIn(nextButtonImage,halfSpeed);
        },halfSpeed);

        setTimeout(function(){
            inMove = false;
        },speed);
    }

    function nextItem() {
        if(!inMove) {
            activeItem = (++activeItem === length) ? 0 : activeItem;
            carouselChange();
        }
    }

    function prevItem() {
        if(!inMove) {
            activeItem = (activeItem) ? --activeItem : length-1;
            carouselChange();
        }
    }

    carouselInit();
    prevButton.addEventListener('click',function(){prevItem()});
    nextButton.addEventListener('click',function(){nextItem()});

})();




