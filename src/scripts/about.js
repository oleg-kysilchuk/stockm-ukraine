import "../pages/about.html";
import "../styles/about.scss";
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

const galleryLinks = [...document.querySelectorAll("a[data-fslightbox='gallery']")];
const changedHref = galleryLinks.map((a) => {
  a.href = a.children[0].src;        ///////////////////////////// DELETE THIS BEFORE LOAD ON HOSTING!!!!!!
});

function toggleAccordion() {
  accordionItems.forEach(i => {
    i.classList.remove('active')
  })
  this.classList.toggle('active');
}

const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(i => {
  i.addEventListener('click', toggleAccordion)
})

$(document).ready(function(){

  $(".action").click(function(e){
      e.preventDefault();

      $(".slide").removeClass("active");
      var slide = $(this).closest(".slide");
      slide.addClass("active");
  });

  $(".action2").click(function(e){
    e.preventDefault();

    $(".slide2").removeClass("active2");
    var slide = $(this).closest(".slide2");
    slide.addClass("active2");
});

});