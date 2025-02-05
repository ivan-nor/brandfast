const productReviewsSwiper = new Swiper('.product-reviews__slider', {
  loop: true,
  slidesPerView: 3,
  width: 606,
  spaceBetween: 50,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const productReviewsNext = document.querySelector('.product-reviews__slider .reviews__arrow-button-next')
const productReviewsPrev = document.querySelector('.product-reviews__slider .reviews__arrow-button-prev')
productReviewsNext.addEventListener('click', () => productReviewsSwiper.slideNext(400))
productReviewsPrev.addEventListener('click', () => productReviewsSwiper.slidePrev(400))

const reviewsSwiper = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 3,
  width: 606,
  spaceBetween: 50,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
const reviewsNext = document.querySelector('.reviews__arrow-button-next')
const reviewsPrev = document.querySelector('.reviews__arrow-button-prev')
reviewsNext.addEventListener('click', () => reviewsSwiper.slideNext(400))
reviewsPrev.addEventListener('click', () => reviewsSwiper.slidePrev(400))

