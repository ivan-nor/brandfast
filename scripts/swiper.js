const reviewsSwiper = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 3,
  width: 606,
  spaceBetween: 50,
  // autoHeight: true,
  centeredSlides: true,
  // breakpoints: {
  //   980: {
  //     width: 400,
  //   },
  //   1200: {
  //     width: 560,
  //   }
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const reviewsNext = document.querySelector('.reviews__arrow-button-next')
const reviewsPrev = document.querySelector('.reviews__arrow-button-prev')
reviewsNext.addEventListener('click', () => reviewsSwiper.slideNext(400))
reviewsPrev.addEventListener('click', () => reviewsSwiper.slidePrev(400))

