const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  edgeSwipeThreshold: 30,
  autoplay: {
    delay: 3000
  }
});