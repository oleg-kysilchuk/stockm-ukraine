import "../pages/project-ekipazh.html";
import "../styles/project-ekipazh.scss";

const problemTabs = document.querySelectorAll(".project-problems__tab-question");
problemTabs.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});