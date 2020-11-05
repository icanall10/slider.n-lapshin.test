(function ($) {

    $(document).ready(function () {

        $('.top-slider-new .owl-carousel').owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            loop: true,
            margin: 20,
            // autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true
        });

    });


})(jQuery);