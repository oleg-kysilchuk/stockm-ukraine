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
];

module.exports = result;