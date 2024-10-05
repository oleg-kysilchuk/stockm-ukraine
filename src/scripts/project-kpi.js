import "../pages/project-kpi.html";
import "../styles/project-kpi.scss";

const problemTabs = document.querySelectorAll(".project-problems__tab-question");
problemTabs.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});