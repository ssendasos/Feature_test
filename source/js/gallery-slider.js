'use strict';

if (window.screen.width < 1139) {


    const obj = document.getElementById('slider');
    const images = document.querySelectorAll('.gallery__item')

    let startX = 0;
    let dist = 0;

    images.forEach((item, index) => {
      item.addEventListener('touchstart', evt => {
        evt.preventDefault()
        const touch = evt.changedTouches[0];
        startX = parseInt(touch.pageX)
      }, false)

      item.addEventListener('touchmove', evt => {
        evt.preventDefault()
        const touch = evt.changedTouches[0];
        dist = parseInt(touch.pageX) - startX

        if (dist > 50 && index != 0) {
          obj.style.transform = 'translateX(' + (-291 * (index - 1)) + "px";
        } else if ( (dist < -50) && (index != 7) ) {
          obj.style.transform = 'translateX(' + (-291 * (index + 1)) + "px";
        }
      }, false);

      item.addEventListener('touchend', evt => {
        evt.preventDefault()
      }, false)
      
    })

}








        
