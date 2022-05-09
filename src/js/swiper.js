new Swiper('.swiper', {
  navigation: {
    nextEl: '.svg-container-2',
    prevEl: '.svg-container-1',
    lockClass: '.swiper-button-disabled',
  },
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  initialSlide: 3,
});
