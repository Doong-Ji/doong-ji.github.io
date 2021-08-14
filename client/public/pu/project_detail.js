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