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


$('#newsletter form > div > button').on('click', function(event) {
  var emailReg = /\S+@\S+\.\S+/;

  var emailVal = $('input[type="email"]').val();
  var nameVal = $('input[type="name"]').val();

  if (emailVal == "") {
    event.preventDefault();
    $('input[type="email"]').after('<span class="error">Wprowadź adres e-mail!</span>');

    setTimeout(function(){
      $('input[type="email"] + span.error').fadeOut(500, function() {
        $(this).remove();
      });
    }, 3000);
  }
  else if (!emailReg.test(emailReg)) {
    event.preventDefault();
    $('input[type="email"]').after('<span class="error">Niepoprawny format adresu e-mail!</span>');

    setTimeout(function(){
      $('input[type="email"] + span.error').fadeOut(500, function() {
        $(this).remove();
      });
    }, 3000);
  }

  if (nameVal == "") {
    event.preventDefault();
    $('#newsletter-name').after('<span class="error">Wprowadź imię!</span>');

    setTimeout(function(){
      $('#newsletter-name + span.error').fadeOut(500, function() {
        $(this).remove();
      });
    }, 3000);
  }
});