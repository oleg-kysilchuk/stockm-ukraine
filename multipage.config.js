const path = require("path");

result = {};

result.entry = {
  index: path.resolve(__dirname, "src", "index.js"),
  about: path.resolve(__dirname, "src/scripts", "about.js"),
  solutions: path.resolve(__dirname, "src/scripts", "solutions.js"),
  consulting: path.resolve(__dirname, "src/scripts", "consulting.js"),
  clients: path.resolve(__dirname, "src/scripts", "clients.js"),
  projects: path.resolve(__dirname, "src/scripts", "projects.js"),
  events: path.resolve(__dirname, "src/scripts", "events.js"),
  contact: path.resolve(__dirname, "src/scripts", "contact.js"),
  'project-ekipazh': path.resolve(__dirname, "src/scripts", "project-ekipazh.js"),
  'project-kpi': path.resolve(__dirname, "src/scripts", "project-kpi.js"),
  'project-shchodnia': path.resolve(__dirname, "src/scripts", "project-shchodnia.js"),
  'project-miroplast': path.resolve(__dirname, "src/scripts", "project-miroplast.js"),
  modeling: path.resolve(__dirname, "src/scripts", "modeling.js"),
  implementation: path.resolve(__dirname, "src/scripts", "implementation.js"),
};

result.pages = [
  {
    chunks: ["index"],
    page: "index.html",
    template: path.resolve(__dirname, "src", "index.html"),
  },
  {
    chunks: ["about"],
    page: "pages/about.html",
    template: path.resolve(__dirname, "src", "pages/about.html"),
  },
  {
    chunks: ["solutions"],
    page: "pages/solutions.html",
    template: path.resolve(__dirname, "src", "pages/solutions.html"),
  },
  {
    chunks: ["consulting"],
    page: "pages/consulting.html",
    template: path.resolve(__dirname, "src", "pages/consulting.html"),
  },
  {
    chunks: ["clients"],
    page: "pages/clients.html",
    template: path.resolve(__dirname, "src", "pages/clients.html"),
  },
  {
    chunks: ["projects"],
    page: "pages/projects.html",
    template: path.resolve(__dirname, "src", "pages/projects.html"),
  },
  {
    chunks: ["events"],
    page: "pages/events.html",
    template: path.resolve(__dirname, "src", "pages/events.html"),
  },
  {
    chunks: ["contact"],
    page: "pages/contact.html",
    template: path.resolve(__dirname, "src", "pages/contact.html"),
  },
  {
    chunks: ["project-ekipazh"],
    page: "pages/project-ekipazh.html",
    template: path.resolve(__dirname, "src", "pages/project-ekipazh.html"),
  },
  {
    chunks: ["project-kpi"],
    page: "pages/project-kpi.html",
    template: path.resolve(__dirname, "src", "pages/project-kpi.html"),
  },
  {
    chunks: ["project-shchodnia"],
    page: "pages/project-shchodnia.html",
    template: path.resolve(__dirname, "src", "pages/project-shchodnia.html"),
  },
  {
    chunks: ["project-miroplast"],
    page: "pages/project-miroplast.html",
    template: path.resolve(__dirname, "src", "pages/project-miroplast.html"),
  },
  {
    chunks: ["implementation"],
    page: "pages/implementation.html",
    template: path.resolve(__dirname, "src", "pages/implementation.html"),
  },
  {
    chunks: ["modeling"],
    page: "pages/modeling.html",
    template: path.resolve(__dirname, "src", "pages/modeling.html"),
  },
];

module.exports = result;