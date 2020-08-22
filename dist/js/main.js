$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 4,    
    navigation: {
      nextEl: '.slider-main__arrow-right',
      prevEl: '.slider-main__arrow-left',
    },    
  });
});
