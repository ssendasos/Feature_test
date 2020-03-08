'use strict';

 const galleryMore = document.querySelector('.gallery__more');
 const moreImages = document.querySelector('.gallery__block');

 galleryMore.addEventListener('click', function(evt) {
    moreImages.classList.toggle('gallery__more--hidden');
    evt.preventDefault();
 })