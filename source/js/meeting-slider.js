
$(document).ready(function() {
    $(".carousel").slick({
            mobileFirst: 'true',
            dots: true,                                               
            initialSlide: 1,                       
            prevArrow: '.slick-prev',
            nextArrow: '.slick-next',
            responsive: [
                {
                    breakpoint: 1139,
                    settings: "unslick",
                }
            ]   
    });
});