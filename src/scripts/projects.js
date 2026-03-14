import "../pages/projects.html";
import "../styles/projects.scss";
import { highlightActivePage, links, initMobileNav } from '../modules/util';

links.forEach(link => highlightActivePage(link));
initMobileNav();
