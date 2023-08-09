import "./index.html";
import "./index.scss";
import { swiper } from "./modules/swiper"; ///????????????
import { highlightActivePage, links } from "./modules/util";

links.forEach(link => highlightActivePage(link));

// window.addEventListener('scroll', scrollToTop);

// const mobNavBtn = document.querySelector(".mobile-menu-btn");
// const mobLinks = document.querySelectorAll(".mobile-navigation__link");

// mobNavBtn.addEventListener("click", showMobileNav);

// mobLinks.forEach(function (link) {
//   link.addEventListener("click", hideMobileNav);
// });
