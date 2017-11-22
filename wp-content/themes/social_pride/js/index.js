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

            //            SHOWING CANVAS and COLORS ON CANVAS

            if (index == 3) {
                $('canvas').addClass('canv-on-gray')
            } else {
                $('canvas').removeClass('canv-on-gray')
            }

            if (index >= 4) {
                $('canvas').addClass('canv-on-blue')
            } else {
                $('canvas').removeClass('canv-on-blue')
            }
        },

        onLeave: function (index, nextIndex, direction) {

            var leavingSection = $(this);

            var fullOffset = 100 * (nextIndex -1);
            fullOffset = '-' + fullOffset + 'vh';
            
            $('#page-background').animate({
                'top': fullOffset
            }, 300);



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

//CANVAS PARALLAX 

   $(function() {
  var doc = $(document),
    body = $("body"),
    docWidth = doc.width(),
    docHeight = doc.height(),
    horiz = 0,
    vert = 1,
    x,
    y,
    range = 12;

  function noTransition() {
    body.removeClass("transition-reset"); //addClass("notransition");
  }

  function followMouse() {
    horiz = range * 2 * (x / docWidth) - range;
    vert = -(range * 2 * (y / docHeight) - range);
    $("#canvas-outer #canvas").css(
      "transform",
      "rotateX(" + vert + "deg) rotateY(" + horiz + "deg) "
    );
    noTransition();
  }

  function reset() {
    body.removeClass("notransition").addClass("transition-reset");
    $("#canvas-outer #canvas").css("transform", "");
  }

  doc.mousemove(function(e) {
    x = e.pageX;
    y = e.pageY;
  });

  doc.mousemove($.throttle(50, followMouse));

  doc.on({
    mouseleave: function() {
      reset();
    },
    mousedown: function() {
      reset();
    }
  });
});

/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b, c) {
  var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}), a;
  $.throttle = a = function(e, f, j, i) {
    var h, d = 0;
    if (typeof f !== "boolean") {
      i = j;
      j = f;
      f = c;
    }
    function g() {
      var o = this, m = +new Date() - d, n = arguments;
      function l() {
        d = +new Date();
        j.apply(o, n);
      }
      function k() {
        h = c;
      }
      if (i && !h) {
        l();
      }
      h && clearTimeout(h);
      if (i === c && m > e) {
        l();
      } else {
        if (f !== true) {
          h = setTimeout(i ? k : l, i === c ? e - m : e);
        }
      }
    }
    if ($.guid) {
      g.guid = j.guid = j.guid || $.guid++;
    }
    return g;
  };
  $.debounce = function(d, e, f) {
    return f === c ? a(d, e, false) : a(d, f, e !== false);
  };
})(this);
