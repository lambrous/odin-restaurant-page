import aboutContent from "./about/about";
import contactContent from "./contact/contact";
import homeContent from "./home/home";
import menuContent from "./menu/menu";

export default [
	{
		element: document.querySelector('button[data-page="home"]'),
		content: homeContent,
	},
	{
		element: document.querySelector('button[data-page="menu"]'),
		content: menuContent,
	},
	{
		element: document.querySelector('button[data-page="contact"]'),
		content: contactContent,
	},
	{
		element: document.querySelector('button[data-page="about"]'),
		content: aboutContent,
	},
];
