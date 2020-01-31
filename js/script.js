;(function (){
    'use strict';
    
    let inputs = document.querySelectorAll('.form__input');
    inputs.forEach(function(input){
        input.addEventListener('change', function() {
            if (this.value.length > 0) {
                this.classList.add('fild');
            }
        })
    })
})();

;(function (){
    'use strict';

    let menuHamburger = document.querySelector('.nav__hamburger'),
        menuClose     = document.querySelector('.nav__close'),
        menuList      = document.querySelector('.nav__items'),
        menuLogo      = document.querySelector('.nav__logo');

    menuHamburger.addEventListener('click', () => {
        // console.log(event.target);
        menuHamburger.style.display = 'none';
        menuList.style.display = 'block';
        menuList.style.transform = 'translate(0, 0)';
        menuClose.style.display = 'block';
        menuLogo.style.width = '55%';
    });
    menuClose.addEventListener('click', () => {
        // console.log(event.target);
        menuHamburger.style.display = 'block';
        menuList.style.display = 'none';
        menuList.style.transform = 'translate(0, -500)';
        menuClose.style.display = 'none';
        menuLogo.style.width = '132px';
    });

})();
// .display-none