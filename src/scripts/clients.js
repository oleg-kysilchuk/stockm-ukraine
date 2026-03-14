import "../pages/clients.html";
import "../styles/clients.scss";
import { highlightActivePage, links, initMobileNav } from '../modules/util';

links.forEach(link => highlightActivePage(link));
initMobileNav();