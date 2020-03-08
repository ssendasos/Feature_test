"use strict";

const popup = document.querySelector('.modal');
const popupOpen = document.querySelector('.reservation__button');
const background = document.querySelector('.custom');
const popupclose = document.querySelector('.button__close');


popupOpen.addEventListener('click', function(evt) {
    popup.classList.remove('modal__close');
    background.classList.add('background');
});

popupclose.addEventListener('click', function(evt) {
    popup.classList.add('modal__close');
    background.classList.remove('background');
});