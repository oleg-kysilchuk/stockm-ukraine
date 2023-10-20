const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  edgeSwipeThreshold: 30,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 6,
      spaceBetween: 30
    },
  }
});
