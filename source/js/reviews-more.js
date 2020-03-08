"use strict";
const reviewsMoreButton = document.getElementById('reviews__more');
const reviewsHidden = document.getElementById('reviews__block');

reviewsMoreButton.innerHTML = 
    "Показать все (" + document.getElementById('reviews__list')
        .getElementsByClassName('reviews__item').length + ")";


reviewsMoreButton.addEventListener('click', function(evt) {
    reviewsHidden.classList.toggle('reviews__more--hidden')
    evt.preventDefault();
}, false);