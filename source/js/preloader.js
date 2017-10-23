document.addEventListener('DOMContentLoaded',function () {
    var elements = document.getElementsByTagName('*'),
        text = document.querySelector('.preload__text');
        console.log(elements);
    loaded = 0;
    [].forEach.call(elements, function(){
        this.addEventListener('load',function(){
            console.log(loaded,elements.length);
            loaded++;
            text.innerText = Math.round(loaded/elements.length*100);
        });
    });
});
