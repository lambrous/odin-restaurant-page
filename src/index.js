import "./css/reset.css";
import "./css/main.css";

import navbarOnScroll from "./ui/navbarOnScroll";
import tabs from "./ui/tabs";
import homeContent from "./ui/home/home";
import { changeContent } from "./ui/content";
import { setActiveTab } from "./ui/activeTab";

changeContent(homeContent);
window.addEventListener("scroll", navbarOnScroll, { passive: true });

for (const tab of tabs) {
	tab.element.addEventListener("click", () => {
		changeContent(tab.content, setActiveTab);
	});
}
