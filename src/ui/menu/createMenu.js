export default (menu) => {
	const menuItem = document.createElement("div");
	menuItem.classList.add("menu");

	const menuImage = new Image();
	menuImage.src = menu.imgSrc;
	menuImage.alt = menu.name;

	const imgWrapper = document.createElement("div");
	imgWrapper.classList.add("image-wrapper");
	imgWrapper.append(menuImage);

	const menuName = document.createElement("p");
	menuName.classList.add("menu-name");
	menuName.textContent = menu.name;

	const menuPrice = document.createElement("p");
	menuPrice.classList.add("price");
	menuPrice.textContent = `$ ${menu.price.toFixed(2)}`;

	const menuDescription = document.createElement("div");
	menuDescription.classList.add("menu-description");
	menuDescription.append(menuName, menuPrice);

	menuItem.append(imgWrapper, menuDescription);

	return menuItem;
};
