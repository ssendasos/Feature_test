"use strict";
var mobileImg = document.querySelector('.mobile-button');
var play = document.querySelector('.description-play');
var deskImg = document.querySelector('.desktop-button');
var playDesk = document.querySelector('.desktop-play');

mobileImg.addEventListener('click', function(evt) {
    play.classList.add('click__hide');
    mobileImg.classList.add('click__hide');
    evt.preventDefault();

})

deskImg.addEventListener('click', function(evt) {
    deskImg.classList.add('click__hide');
    playDesk.classList.add('click__hide');
    evt.preventDefault();
})