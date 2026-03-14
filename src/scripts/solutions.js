import "../pages/solutions.html";
import "../styles/solutions.scss";
import { highlightActivePage, links, initMobileNav } from "../modules/util";

links.forEach((link) => highlightActivePage(link));
initMobileNav();
