import "../pages/implementation.html";
import "../styles/land.scss";
import { highlightActivePage, links, initMobileNav } from "../modules/util";

links.forEach((link) => highlightActivePage(link));
initMobileNav();
