import "./index.html";
import "./index.scss";
import { swiper } from "./modules/swiper";
import { highlightActivePage, links, initMobileNav } from "./modules/util";

links.forEach(link => highlightActivePage(link));
initMobileNav();
