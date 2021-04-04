'use strict';

const burgerBtn = document.querySelector('#burger-btn');
const burgerMenu = document.querySelector('#burger-menu');

burgerBtn.addEventListener('click', () => {
    document.body.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

document.body.addEventListener('click', event => {
    if (event.target === document.body) {
        burgerMenu.classList.remove('active');
        document.body.classList.remove('active');
    }
});