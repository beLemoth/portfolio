function Intro() {
    this.section = document.querySelector('section.intro');
    this.checkbox = this.section.querySelector('input.flip');
    this.block = document.querySelector('.intro-block');
    this.login = document.querySelector('.login');

    this.checkbox.checked = false;

    this.init = function(){

        var that = this;

        setTimeout(function(){
            that.block.classList.toggle('active');
        }, 1000);

        this.section.addEventListener('click',function (event) {
            that.login.style.display = 'block';
            if(event.target === that.section || event.target === that.block ) {
                that.checkbox.checked = false;
            }
        });
    }
}
