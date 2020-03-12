(function($) {
    "use strict";

    $('#circle').circleProgress({
        value: .75,
        size: 50,
        emptyFill: "red",
        thickness: 7,
        fill: {
            gradient: ["#34EA6C", "#34EA6C"]
        }
    });
    $('#circle-full').circleProgress({
        value: 1,
        size: 50,
        emptyFill: "red",
        thickness: 7,
        fill: {
            gradient: ["#34EA6C", "#34EA6C"]
        }
    });
    $(".toggle-btn").click(function() {
        $(".header-navbar ul").slideToggle("slow");
    });

    // $(".toggle-btn").click(function() {
    //     $('.header-navbar ul').removeClass('hero-nav-item');
    //     $(this).addClass('hero-nav-item');
    // });

})(jQuery);