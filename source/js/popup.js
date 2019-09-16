"use strict";

var popup = document.querySelector('.modal');
var popupOpen = document.querySelector('.reservation__button');
var background = document.querySelector('.custom');
var popupclose = document.querySelector('.button__close');


popupOpen.addEventListener('click', function(evt) {
    popup.classList.remove('modal__close');
    background.classList.add('background');
});

popupclose.addEventListener('click', function(evt) {
    popup.classList.add('modal__close');
    background.classList.remove('background');
});