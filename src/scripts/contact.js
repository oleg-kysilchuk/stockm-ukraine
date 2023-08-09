import "../pages/contact.html";
import "../styles/contact.scss";
import { highlightActivePage, links } from '../modules/util';

links.forEach(link => highlightActivePage(link));

// import { scrollToTop, showMobileNav, hideMobileNav, highlightActivePage, links } from "../modules/util";
// window.addEventListener("scroll", scrollToTop);

// const mobNavBtn = document.querySelector(".mobile-menu-btn");
// const mobLinks = document.querySelectorAll(".mobile-navigation__link");

// links.forEach(link => highlightActivePage(link));

// mobNavBtn.addEventListener("click", showMobileNav);

// mobLinks.forEach(function (link) {
//   link.addEventListener("click", hideMobileNav);
// });