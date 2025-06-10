$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        margin:100,
        nav:true,
        items: 1,
        dots: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});