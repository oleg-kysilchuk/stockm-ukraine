const mobNav = document.querySelector(".mobile-navigation");

export const links = document.querySelectorAll('.main-navigation__link');

export const showMobileNav = () => {
  mobNav.classList.add("show");
};

export const hideMobileNav = () => {
  mobNav.classList.remove("show");
}

export function highlightActivePage(link) {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
}

export function initMobileNav() {
  const mobNavBtn = document.querySelector(".mobile-menu-btn");
  const mobLinks = document.querySelectorAll(".mobile-navigation__link");
  const closeBtn = document.querySelector(".mobile-navigation__close-btn");

  mobNavBtn.addEventListener("click", showMobileNav);
  closeBtn.addEventListener("click", hideMobileNav);

  mobLinks.forEach((link) => {
    link.addEventListener("click", hideMobileNav);
  });
}
