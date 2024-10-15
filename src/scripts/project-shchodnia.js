import "../pages/project-shchodnia.html";
import "../styles/project-single.scss";

const problemTabs = document.querySelectorAll(".project-problems__tab-question");
problemTabs.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});