
'use strict';

window.addEventListener('load', function() {
    var leftButton = document.getElementById('left-arrow');
    var rightButton = document.getElementById('right-arrow');
    var obj = document.getElementById('slider-2');
    var clicks = 0;
    var btn1 = document.querySelector("[for=btn-1]");
    var btn2 = document.querySelector("[for=btn-2]");
    var btn3 = document.querySelector("[for=btn-3]");

    


    rightButton.addEventListener('click', function(evt) {
        clicks++;

        if (clicks == 1) {
            obj.style.transform = "translateX(" + -235 + "px";
            btn2.style.background = "#FC9B09";
            btn2.style.borderColor = "#FC9B09"
            btn1.style.background = "#ffffff";
            btn1.style.borderColor = "#B3B3B3";
        } else if (clicks == 2) {
            obj.style.transform = "translateX(" + -460 + "px";
            btn3.style.background = "#FC9B09";
            btn3.style.borderColor = "#FC9B09"
            btn2.style.background = "#ffffff";
            btn2.style.borderColor = "#B3B3B3";
            clicks = 0;
        }
        
        evt.preventDefault();
    }, false);


    leftButton.addEventListener('click', function(evt) {
        clicks++;
        if (clicks == 1) {
            obj.style.transform = "translateX(" + -235 + "px";
            
            
        } else if (clicks == 2) {
            obj.style.transform = "translateX(" + -0 + "px";
            clicks = 0;
        }

        evt.preventDefault();

        

    }, false)




}, false)