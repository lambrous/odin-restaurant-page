import "./css/reset.css";
import "./css/main.css";

import renderContent from "./contents/renderContent";
import homeContent from "./contents/home/home";
import menuContent from "./contents/menu/menu";
import contactContent from "./contents/contact";
import aboutContent from "./contents/about";

const homeButton = document.querySelector('button[data-page="home"]');
const menuButton = document.querySelector('button[data-page="menu"]');
const contactButton = document.querySelector('button[data-page="contact"]');
const aboutButton = document.querySelector('button[data-page="about"]');

renderContent(homeContent);

homeButton.addEventListener("click", () => renderContent(homeContent));
menuButton.addEventListener("click", () => renderContent(menuContent));
contactButton.addEventListener("click", () => renderContent(contactContent));
aboutButton.addEventListener("click", () => renderContent(aboutContent));
