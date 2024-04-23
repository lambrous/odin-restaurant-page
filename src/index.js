import aboutContent from "./contents/about";
import contactContent from "./contents/contact";
import homeContent from "./contents/home";
import menuContent from "./contents/menu";
import "./style.css";

const content = document.querySelector("#content");
const homeButton = document.querySelector('button[data-page="home"]');
const menuButton = document.querySelector('button[data-page="menu"]');
const contactButton = document.querySelector('button[data-page="contact"]');
const aboutButton = document.querySelector('button[data-page="about"]');

function renderContent(page) {
	content.replaceChildren(page);
}

renderContent(homeContent);

homeButton.addEventListener("click", () => renderContent(homeContent));
menuButton.addEventListener("click", () => renderContent(menuContent));
contactButton.addEventListener("click", () => renderContent(contactContent));
aboutButton.addEventListener("click", () => renderContent(aboutContent));
