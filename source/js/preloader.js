document.addEventListener('DOMContentLoaded',function () {
    var elements = document.getElementsByTagName('*'),
        text = document.querySelector('.preload__text'),
        images = [],
        loadedItems = 0,
        loadedProgress = 0;

    [].forEach.call(elements, function(value,item,array){
        var computedStyle = getComputedStyle(value);

        if(value.tagName==='IMG' && value.src) images.push(value.src);

        if(computedStyle.backgroundImage && computedStyle.backgroundImage!== 'none') {

            var tpl = computedStyle.backgroundImage.replace('url("','');
                tpl = tpl.replace('")','');
            images.push(tpl);
        }
    });

    images.forEach(function(value,item,array){
        var object = document.createElement('img');
            object.src = value;

        object.addEventListener('load',function(){

            loadedProgress = Math.round(++loadedItems/images.length*100);
            text.innerText = loadedProgress+'%';

            if(loadedProgress>=100) {
                var element = document.querySelector('.preload');
                fadeOut(element,1000);
                var timer = setTimeout(function(){
                    element.style.display = 'none';
                }, 1000);
            }
        });
    });

});
