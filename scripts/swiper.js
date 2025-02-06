const reviewsConfig = {
  loop: true,
  slidesPerView: 3,
  width: 606,
  spaceBetween: 50,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const reviewsElement = document.querySelector('.reviews__slider')
let reviewsSwiper;

function initSwiper() {
  if (reviewsElement) {
    if (reviewsSwiper) {
      reviewsSwiper.destroy(true, true); // Уничтожаем предыдущий экземпляр
    }
    reviewsSwiper = new Swiper(reviewsElement, reviewsConfig);
    const reviewsNext = document.querySelector('.reviews__slider .reviews__arrow-button-next')
    const reviewsPrev = document.querySelector('.reviews__slider .reviews__arrow-button-prev')
    reviewsNext.addEventListener('click', () => reviewsSwiper.slideNext(400))
    reviewsPrev.addEventListener('click', () => reviewsSwiper.slidePrev(400))
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);
