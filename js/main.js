(function ($) {

    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        nextArrow: '<i class="fa-solid fa-chevron-right next-arrow"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-left prev-arrow"></i>',
    });

})(jQuery);