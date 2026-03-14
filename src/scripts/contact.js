import "../pages/contact.html";
import "../styles/contact.scss";
import { highlightActivePage, links, initMobileNav } from '../modules/util';

links.forEach(link => highlightActivePage(link));
initMobileNav();