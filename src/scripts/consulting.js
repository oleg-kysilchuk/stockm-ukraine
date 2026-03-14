import "../pages/consulting.html";
import "../styles/consulting.scss";
import "../modules/swiper.js";
import { highlightActivePage, links, initMobileNav } from "../modules/util";

links.forEach((link) => highlightActivePage(link));
initMobileNav();

const processTabs = document.querySelectorAll(".work-process__tab-question");

processTabs.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
