"use strict"

const firstMore = document.getElementById('more-button-1');
const secondMore = document.getElementById('more-button-2');
const firstHidden = document.querySelector('.about__block');
const secondHidden = document.querySelector('.about__block--2');

firstMore.addEventListener('click', function(evt) {
    firstHidden.classList.toggle('about__more--hidden--1')
    evt.preventDefault();
}, false);

secondMore.addEventListener('click', function(evt) {
    secondHidden.classList.toggle('about__more--hidden--2');
    evt.preventDefault();
});