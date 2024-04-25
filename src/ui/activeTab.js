import tabs from "./tabs";

export function setActiveTab(currentContent) {
	for (const { element, content } of tabs) {
		if (content === currentContent) element.classList.add("active-tab");
		else element.classList.remove("active-tab");
	}
}
