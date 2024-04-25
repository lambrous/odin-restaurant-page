import "./home.css";
import restaurantImgSrc from "../../images/restaurant.jpg";

const homeContent = document.createElement("div");
homeContent.id = "home";

const heading = document.createElement("h1");
heading.textContent = "The Odin Restaurant";

const menuButton = document.createElement("button");
menuButton.textContent = "View Menu";
menuButton.addEventListener("click", () =>
	document.querySelector('button[data-page="menu"]').click(),
);

const restaurantImage = new Image();
restaurantImage.src = restaurantImgSrc;

homeContent.append(heading, menuButton, restaurantImage);

export default homeContent;
