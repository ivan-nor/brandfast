const reviewsSwiper = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 3,
  width: 600,
  spaceBetween: 0,
  autoHeight: true,
  centeredSlides: true,
  // breakpoints: {
  //   980: {
  //     width: 400,
  //   },
  //   1200: {
  //     width: 560,
  //   }
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
reviewsSwiper.on('')