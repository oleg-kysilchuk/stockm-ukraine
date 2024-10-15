import "../pages/project-ekipazh.html";
import "../styles/project-single.scss";
import '../modules/owl-slider';
import '../styles/owl/owl.carousel.min.css'
import '../styles/owl/owl.theme.default.min.css'

const problemTabs = document.querySelectorAll(".project-problems__tab-question");
problemTabs.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});