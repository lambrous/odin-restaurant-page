const content = document.querySelector("#content");

function renderContent(page) {
	content.replaceChildren(page);
}

export default renderContent;
