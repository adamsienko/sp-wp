$(function () {

    //    PRELOADER

    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    })

    //   CLICLABLE LIST STYLE DOTS (TOOLTIPS = DOTS)

    $('li').css('cursor', 'pointer')

        .click(function () {
            window.location = $('a', this).attr('href');
            return false;
        });

    //SIEDEBAR

    $('.menu').click(function () {
        $(this).toggleClass('menu-clicked');
        $('.sidebar').toggleClass('show-sidebar hide-sidebar');

    });

    $('.sidebar a').click(function () {
        $('.menu').toggleClass('menu-clicked');
        $('.sidebar').toggleClass('show-sidebar hide-sidebar');
    });

    /*HIDE MOBILE MENU AFTER CLICK  */

    $('.nav a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
});

/*FULL PAGE JS*/
$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['main', 'about', 'offer', 'blog', 'contact'],
        menu: '#myMenu',
        controlArrows: false,
        scrollOverflow: true,
        afterLoad: function (anchorLink, index) {

            $('#page-background').css('transform', $('#fullpage').css('transform'));

            var fullOffset = $("#fullpage").css('transform').split(",");
            var fullOffset = fullOffset[fullOffset.length - 1];
            var fullOffset = fullOffset.replace(" ", "");
            var fullOffset = fullOffset.replace(")", "");


            //            SHOWING CANVAS and COLORS ON CANVAS

            if (index == 3) {          
                $('canvas').addClass('canv-on-gray')
            } else {
                $('canvas').removeClass('canv-on-gray')
            }

            if (index == 5) {
                $('canvas').addClass('canv-on-blue')
            } else {
                $('canvas').removeClass('canv-on-blue')
            }
        },

        onLeave: function (index, nextIndex, direction) {

            var leavingSection = $(this);

            if (nextIndex == 1) {
                $('.dotstyle li:nth-child(1)').addClass('active current');
                $('.dotstyle li:not(:nth-child(1))').removeClass('active current');
            }
            if (nextIndex == 2) {
                $('.dotstyle li:nth-child(2)').addClass('active current');
                $('.dotstyle li:not(:nth-child(2))').removeClass('active current');

                $('.about-main .icon-loader__circle').addClass('m--left');
            } else {
                $('.about-main .icon-loader__circle').removeClass('m--left');
            }

     
            //SCALING ICONS

            if (nextIndex == 2) {
                $('.about-main .scale').addClass('scale-icon');
            } else {
                $('.about-main .scale').removeClass('scale-icon');
            }

            if (nextIndex == 3) {
                $('.dotstyle li:nth-child(3)').addClass('active current');
                $('.dotstyle li:not(:nth-child(3))').removeClass('active current');

                $('.offer-main .icon-loader__circle').addClass('m--left');
            } else {
                $('.offer-main .icon-loader__circle').removeClass('m--left');
            }
            //SCALING ICONS
            if (nextIndex == 3) {
                $('.offer-main .scale').addClass('scale-icon');
            } else {
                $('.offer-main .scale').removeClass('scale-icon');
            }

            if (nextIndex == 4) {
                $('.dotstyle li:nth-child(4)').addClass('active current');
                $('.dotstyle li:not(:nth-child(4))').removeClass('active current');
            }
            if (nextIndex == 5) {
                $('.dotstyle li:nth-child(5)').addClass('active current');
                $('.dotstyle li:not(:nth-child(5))').removeClass('active current');

                // LOCK SCROLL BLOG POSTS
                $.fn.fullpage.setAllowScrolling(false, 'down');
            } else {
                $.fn.fullpage.setAllowScrolling(true, 'down');
            }

            if (nextIndex == 6) {
                $.fn.fullpage.setAllowScrolling(false, 'up');
            } else {
                $.fn.fullpage.setAllowScrolling(true, 'up');
            }
        }
    })
});
