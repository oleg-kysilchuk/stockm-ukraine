const mobNav = document.querySelector(".mobile-navigation");

export const links = document.querySelectorAll('.main-navigation__link');

export const showMobileNav = () => {
  mobNav.classList.add("show");
};

export const hideMobileNav = () => {
  mobNav.classList.remove("show");
}

export function highlightActivePage (link) {
  if(link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
  }
}
