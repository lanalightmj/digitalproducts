//===== for bootstrap carousel =====//
$('.carousel').carousel();

//===== for fixed menu =====//
$(window).scroll(function(){
	$('.header').toggleClass('header-color-background', $(this).scrollTop() > 0);
});

//===== Animate Sotials =====//
$(document).ready(function() {
    $('a.animated').hover(
     function() {
      $(this).addClass('heartBeat'); // Добавляем класс heartBeat
     },
     function() {
      $(this).removeClass('heartBeat'); // Убираем класс
     }
    )})

//===== for slick slider =====//
$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});