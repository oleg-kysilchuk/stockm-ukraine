const swiper = new Swiper(".swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 10,
    edgeSwipeThreshold: 40,
    breakpoints: {
      // when window width is >= 992px
      992: {
        slidesPerView: 1,
        spaceBetween: 10
      },
    }
  });