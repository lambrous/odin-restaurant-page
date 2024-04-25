const contentContainer = document.querySelector("#content");

export function renderContent(content) {
	contentContainer.replaceChildren(content);
}

let currentContent = null;
export const getCurrentContent = () => currentContent;

export function changeContent(content, onChange = null) {
	if (currentContent === content) return;
	currentContent = content;
	renderContent(currentContent);
	if (onChange) onChange(currentContent);
}
