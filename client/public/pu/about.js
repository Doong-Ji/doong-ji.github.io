var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    // when window width is <= 499px
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is <= 999px
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});

var reviewSwiper = new Swiper('.reviewSwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3.2,
  spaceBetween: 22,
  breakpoints: {
    // when window width is <= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
  },
});
