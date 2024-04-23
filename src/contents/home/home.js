import "./home.css";
import restaurantImgSrc from "../../images/restaurant.jpg";
import renderContent from "../renderContent";
import menuContent from "../menu";

const homeContent = document.createElement("div");
homeContent.id = "home";

const heading = document.createElement("h1");
heading.textContent = "The Odin Restaurant";

const menuButton = document.createElement("button");
menuButton.textContent = "View Menu";
menuButton.addEventListener("click", () => renderContent(menuContent));

const restaurantImage = new Image();
restaurantImage.src = restaurantImgSrc;

homeContent.append(heading, menuButton, restaurantImage);

export default homeContent;
