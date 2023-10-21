import "../pages/clients.html";
import "../styles/clients.scss";
import { highlightActivePage, links, showMobileNav, hideMobileNav } from '../modules/util';

links.forEach(link => highlightActivePage(link));

const mobNavBtn = document.querySelector(".mobile-menu-btn");
const mobLinks = document.querySelectorAll(".mobile-navigation__link");

mobNavBtn.addEventListener("click", showMobileNav);

mobLinks.forEach(function (link) {
  link.addEventListener("click", hideMobileNav);
});