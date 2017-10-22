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

    function carouselInit() {
        preview.appendChild(createImage(activeItem));
        prevButton.appendChild(createImage(activeItem-1,'carousel-control'));
        nextButton.appendChild(createImage(activeItem+1,'carousel-control'));

        itemTitle.innerText = carouselItems[activeItem].title;
        itemDesc.innerText = carouselItems[activeItem].desc;
        itemLink.href = carouselItems[activeItem].link;
    }

    function carouselChange(speed) {
        speed = speed || 1000;
        var previewImage = preview.querySelector(".carousel-preview__image"),
            prevButtonImage = prevButton.querySelector(".carousel-control__image"),
            nextButtonImage = nextButton.querySelector(".carousel-control__image");

        fadeOut(previewImage,speed);
        moveDown(prevButtonImage,speed);
        moveTop(nextButtonImage,speed);
        var timer = setTimeout(function() {
            previewImage.querySelector('img').src = carouselItems[activeItem].image;
            prevButtonImage.remove();
            nextButtonImage.remove();
            prevButton.appendChild(createImage(activeItem-1,'carousel-control'));
            nextButton.appendChild(createImage(activeItem+1,'carousel-control'));
            pushTop(nextButtonImage,speed,speed);
            pushDown(prevButton.querySelector(".carousel-control__image"),speed,speed);
        },speed);

        fadeIn(previewImage,speed,speed);



    }

    function nextItem() {
        activeItem = (++activeItem === length) ? 0 : activeItem;
        console.log(activeItem);
        carouselChange();
    }

    function prevItem() {
        activeItem = (activeItem) ? --activeItem : length-1;
        console.log(activeItem);
        carouselChange();
    }

    carouselInit();
    prevButton.addEventListener('click',function(){prevItem()});
    nextButton.addEventListener('click',function(){nextItem()});

})();



