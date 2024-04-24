import "./css/reset.css";
import "./css/main.css";

import renderContent from "./ui/renderContent";
import homeContent from "./ui/home/home";
import menuContent from "./ui/menu/menu";
import contactContent from "./ui/contact";
import aboutContent from "./ui/about";
import navbarOnScroll from "./ui/navbarOnScroll";

const homeButton = document.querySelector('button[data-page="home"]');
const menuButton = document.querySelector('button[data-page="menu"]');
const contactButton = document.querySelector('button[data-page="contact"]');
const aboutButton = document.querySelector('button[data-page="about"]');

renderContent(homeContent);

homeButton.addEventListener("click", () => renderContent(homeContent));
menuButton.addEventListener("click", () => renderContent(menuContent));
contactButton.addEventListener("click", () => renderContent(contactContent));
aboutButton.addEventListener("click", () => renderContent(aboutContent));
window.addEventListener("scroll", navbarOnScroll, { passive: true });
