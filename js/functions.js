/* ----- */
/* Marcin  */

/* Karolina */
// #nav
$(document).ready(function() {
 
    $('#nav > .row > [class*="col-"] > ul > li > a').append('<i class="fas fa-angle-down"></i>');
 
    $('#nav > .row > [class*="col-"] > ul > li').each(function( index ) {
      var linkWidth = $(this).children('a').width();
 
      $(this).children('a').append('<span class="menu-border"></span>');
 
      console.log($(this));
      $(this).find('span.menu-border').css({
        width: (linkWidth+28)+'px',
        marginLeft: '-14px',
        marginRight: '-14px'
      });
    });
  });

/* Piotr */

/* Adrian */

/* Marta */

$(function () {
    $('.slider_producers').slick({
        infinite: true,
        slidesToShow: 6,
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 600,
        });

     $('.main_slider').slick({
        infinite: true,
        dots: true,
        arrows: true,
        autoplay: true,
        fade: true,
        nextArrow: '<div class="col-12"><div class="nextArrow"><i class="fa fa-angle-right"></i></div></div>',
        prevArrow: '<div class="col-12"><div class="prevArrow"><i class="fa fa-angle-left"></i></div></div>',
    });
});

 
$(function () {
   
});