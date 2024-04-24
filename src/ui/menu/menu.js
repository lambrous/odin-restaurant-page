import "./menu.css";
import menuData from "../../data/menu";
import createMenu from "./createMenu";

const menuContent = document.createElement("div");
menuContent.id = "menu";

for (const menu of menuData) {
	const menuItem = createMenu(menu);
	menuContent.append(menuItem);
}

export default menuContent;
