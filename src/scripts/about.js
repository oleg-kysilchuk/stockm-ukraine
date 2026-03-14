import "../pages/about.html";
import "../styles/about.scss";
import "../modules/fslightbox.js";
import "../modules/swiperAbout.js";
import { highlightActivePage, links, initMobileNav } from "../modules/util";

links.forEach((link) => highlightActivePage(link));
initMobileNav();

document.querySelectorAll("a[data-fslightbox='gallery']").forEach((a) => {
  a.href = a.children[0].src;
});
refreshFsLightbox();

const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach((item) => {
  item.addEventListener('click', function () {
    accordionItems.forEach((i) => i.classList.remove('active'));
    this.classList.toggle('active');
  });
});

[
  [".action",  ".slide",  "active"],
  [".action2", ".slide2", "active2"],
  [".action3", ".slide3", "active3"],
  [".action4", ".slide4", "active4"],
].forEach(([actionSel, slideSel, cls]) => {
  document.querySelectorAll(actionSel).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(slideSel).forEach((s) => s.classList.remove(cls));
      btn.closest(slideSel).classList.add(cls);
    });
  });
});