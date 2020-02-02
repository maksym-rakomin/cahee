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
        menuNav       = document.querySelector('.nav'),
        menuList      = document.querySelector('.nav__items');
        

    menuHamburger.addEventListener('click', () => {
        menuNav.classList.toggle('menu__opened');
    });
    menuList.addEventListener('click', () => {
        menuNav.classList.remove('menu__opened');
    });

})();