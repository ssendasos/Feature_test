'use strict';

if (window.screen.width < 1139) {


    
        window.addEventListener('load', function() {
        var firstImage = document.getElementById('image-1');
        var secondImage = document.getElementById('image-2');
        var thirdImage = document.getElementById('image-3');
        var fourthImage = document.getElementById('image-4');
        var fifthImage = document.getElementById('image-5');
        var sixthImage = document.getElementById('image-6');
        var seventhImage = document.getElementById('image-7');
        var eighthImage = document.getElementById('image-8');
        var obj = document.getElementById('slider');

        var startX = 0;
        var dist = 0;

        

        firstImage.addEventListener('touchstart', function(evt) {
            var touch = evt.changedTouches[0];
            startX = parseInt(touch.pageX);
            
            evt.preventDefault();
        }, false);

        firstImage.addEventListener('touchmove', function(evt) {
            var touch = evt.changedTouches[0];
            var dist = parseInt(touch.pageX) - startX;

            if (dist > 50) {
                obj.style.transform = "translateX(" + 0 + "px";
            } else if( dist < -50) {
                obj.style.transform = "translateX(" + -285 + "px";
            }
        }, false);

        firstImage.addEventListener('touchend', function(evt) {
            var touch = evt.changedTouches[0];
            evt.preventDefault();
        }, false);







        secondImage.addEventListener('touchstart', function(evt) {
            var touch = evt.changedTouches[0];
            startX = parseInt(touch.pageX);
            
            evt.preventDefault();
        }, false);

        secondImage.addEventListener('touchmove', function(evt) {
            var touch = evt.changedTouches[0];
            var dist = parseInt(touch.pageX) - startX;
            

            if (dist > 50) {
                obj.style.transform = "translateX(" + 0 + "px";
                
            } else if( dist < 50) {
                obj.style.transform = "translateX(" + -575 + "px";
            }
        }, false);

        secondImage.addEventListener('touchend', function(evt) {
            var touch = evt.changedTouches[0];
            evt.preventDefault();
        }, false);




        thirdImage.addEventListener('touchstart', function(evt) {
            var touch = evt.changedTouches[0];
            startX = parseInt(touch.pageX);
            
            evt.preventDefault();
        }, false);

        thirdImage.addEventListener('touchmove', function(evt) {
            var touch = evt.changedTouches[0];
            var dist = parseInt(touch.pageX) - startX;
            

            if (dist > 50) {
                obj.style.transform = "translateX(" + -285 + "px";
                
            } else if( dist < -50) {
                obj.style.transform = "translateX(" + -867 + "px";
            }
        }, false);

        thirdImage.addEventListener('touchend', function(evt) {
            var touch = evt.changedTouches[0];
            evt.preventDefault();
        }, false);




        fourthImage.addEventListener('touchstart', function(evt) {
            var touch = evt.changedTouches[0];
            startX = parseInt(touch.pageX);
            
            evt.preventDefault();
        }, false);

        fourthImage.addEventListener('touchmove', function(evt) {
            var touch = evt.changedTouches[0];
            var dist = parseInt(touch.pageX) - startX;
            

            if (dist > 50) {
                obj.style.transform = "translateX(" + -576 + "px";
                
            } else if( dist < -50) {
                obj.style.transform = "translateX(" + -1160 + "px";
            }
        }, false);

        fourthImage.addEventListener('touchend', function(evt) {
            var touch = evt.changedTouches[0];
            evt.preventDefault();
        }, false);




        fifthImage.addEventListener('touchstart', function(evt) {
            var touch = evt.changedTouches[0];
            startX = parseInt(touch.pageX);
            
            evt.preventDefault();
        }, false);

        fifthImage.addEventListener('touchmove', function(evt) {
            var touch = evt.changedTouches[0];
            var dist = parseInt(touch.pageX) - startX;
            

            if (dist > 50) {
                obj.style.transform = "translateX(" + -867 + "px";
                
            } else if( dist < -50) {
                obj.style.transform = "translateX(" + -1451 + "px";
            }
        }, false);

        fifthImage.addEventListener('touchend', function(evt) {
            var touch = evt.changedTouches[0];
            evt.preventDefault();
        }, false);




        sixthImage.addEventListener('touchstart', function(evt) {
            var touch = evt.changedTouches[0];
            startX = parseInt(touch.pageX);
            
            evt.preventDefault();
        }, false);

        sixthImage.addEventListener('touchmove', function(evt) {
            var touch = evt.changedTouches[0];
            var dist = parseInt(touch.pageX) - startX;
            

            if (dist > 50) {
                obj.style.transform = "translateX(" + -1160 + "px";
                
            } else if( dist < -50) {
                obj.style.transform = "translateX(" + -1742 + "px";
            }
        }, false);

        sixthImage.addEventListener('touchend', function(evt) {
            var touch = evt.changedTouches[0];
            evt.preventDefault();
        }, false);





        seventhImage.addEventListener('touchstart', function(evt) {
            var touch = evt.changedTouches[0];
            startX = parseInt(touch.pageX);
            
            evt.preventDefault();
        }, false);

        seventhImage.addEventListener('touchmove', function(evt) {
            var touch = evt.changedTouches[0];
            var dist = parseInt(touch.pageX) - startX;
            

            if (dist > 50) {
                obj.style.transform = "translateX(" + -1451 + "px";
                
            } else if( dist < -50) {
                obj.style.transform = "translateX(" + -2033 + "px";
            }
        }, false);

        seventhImage.addEventListener('touchend', function(evt) {
            var touch = evt.changedTouches[0];
            evt.preventDefault();
        }, false);




        eighthImage.addEventListener('touchstart', function(evt) {
            var touch = evt.changedTouches[0];
            startX = parseInt(touch.pageX);
            
            evt.preventDefault();
        }, false);

        eighthImage.addEventListener('touchmove', function(evt) {
            var touch = evt.changedTouches[0];
            var dist = parseInt(touch.pageX) - startX;
            

            if (dist > 50) {
                obj.style.transform = "translateX(" + -1742 + "px";
                
            } 0
        }, false);

        eighthImage.addEventListener('touchend', function(evt) {
            var touch = evt.changedTouches[0];
            evt.preventDefault();
        }, false);


        

    }, false)

} 