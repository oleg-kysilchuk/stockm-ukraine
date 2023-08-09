import "../pages/solutions.html";
import "../styles/solutions.scss";
import { highlightActivePage, links } from '../modules/util';

links.forEach(link => highlightActivePage(link));

// import {scrollToTop, showMobileNav, hideMobileNav, highlightActivePage, links} from '../modules/util';
// window.addEventListener('scroll', scrollToTop);

// const mobNavBtn = document.querySelector(".mobile-menu-btn");
// const mobLinks = document.querySelectorAll(".mobile-navigation__link");

// links.forEach(link => highlightActivePage(link));

// mobNavBtn.addEventListener("click", showMobileNav);

// mobLinks.forEach(function (link) {
//   link.addEventListener("click", hideMobileNav);
// });

// const vid = document.querySelector("video");

// const videoControlsHandler = (event) => {
//   if (event.type === "mouseover") {
//     event.target.setAttribute("controls", "");
//   } else if (event.type === "mouseleave") {
//     event.target.removeAttribute("controls");
//   }
// };
// vid.addEventListener("mouseover", videoControlsHandler);

// vid.addEventListener("mouseleave", videoControlsHandler);

