import "../pages/modeling.html";
import "../styles/land.scss";
import {
  highlightActivePage,
  links,
  showMobileNav,
  hideMobileNav,
} from "../modules/util";

links.forEach((link) => highlightActivePage(link));

const mobNavBtn = document.querySelector(".mobile-menu-btn");
const mobLinks = document.querySelectorAll(".mobile-navigation__link");
const closeBtn = document.querySelector(".mobile-navigation__close-btn");

mobNavBtn.addEventListener("click", showMobileNav);
closeBtn.addEventListener("click", hideMobileNav);

mobLinks.forEach(function (link) {
  link.addEventListener("click", hideMobileNav);
});
