/*global $, window, WOW*/

$(function () {

    "use strict";
    
    //addClass "Scrolled" To Navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".navbar").height()) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
    
    // scroll to section
    
    $(window).scroll(function () {
        $(".block").each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 10) {
                var blockID = $(this).attr("id");
                $(".navbar .navbar-nav li a").removeClass("active");
                $(".navbar .navbar-nav li a[data-nav=" + blockID + "]").addClass("active");   
            }
        });
    });
    
    $(".navbar li a").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("nav")).offset().top + 1
        }, 1000);
    });

    //niceScroll Plugin
    $("html").niceScroll({
        cursorcolor: "#f38181",
        cursorwidth: "5px",
        background: "none",
        cursorborder: "none",
        cursorborderradius: "7px"
    });
    
    // Trigger WOW Plugin
    new WOW().init();

    // Statistics Section [Counter]
    var a = 0;
    $(window).scroll(function () {
        var countTop = $(".timer").offset().top - window.innerHeight;

        if (a === 0 && $(window).scrollTop() > countTop) {
            $(".timer").countTo();
            a = 10;
        }
    });
    
    // Loading Window
    $(window).load(function () {
        $(".loading .box").fadeOut(2000, function () {
            $(".loading").fadeOut(400, function () {
                $(this).remove();
            });
        });
    });

});
