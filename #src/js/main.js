$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 4,    
    navigation: {
      nextEl: '.slider-main__arrow-right',
      prevEl: '.slider-main__arrow-left',
    },
    breakpoints: {
      1100: {
        slidesPerView: 4,
      },     
      768: {
        slidesPerView: 3,       
      },
      576: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    }   
  });
  $(".navbar-burger").on('click', function (e) {
    e.preventDefault(); 
    $('.navbar-block').toggleClass("active");
    $('.navbar-burger__line:first').toggleClass('line1');
    $('.navbar-burger__line:last').toggleClass('line3');
    $('.navbar-burger__line:eq(1)').toggleClass('line2');


    $("body").toggleClass('no-scroll');
    
    
  });

});
