// const topBtn = document.querySelector(".scroll-to-top");

// const mobNav = document.querySelector(".mobile-navigation");

export const links = document.querySelectorAll('.main-navigation__link');

// export const scrollToTop = () => {
//   if (window.scrollY > 200) {
//     topBtn.style.bottom = "100px";
//     topBtn.style.opacity = "1";
//   } else {
//     topBtn.style.bottom = "-100px";
//     topBtn.style.opacity = "0";
//   }
// };

// export const showMobileNav = (e) => {
//   mobNav.classList.add("show");
// };

// export const hideMobileNav = () => {
//   mobNav.classList.remove("show");
// }

export function highlightActivePage (link) {
  if(link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
}
