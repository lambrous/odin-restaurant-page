import "./about.css";
import about1Img from "../../images/about1.jpg";
import about2Img from "../../images/about2.jpg";
import about3Img from "../../images/about3.jpg";

const aboutItems = [
	{
		title: "A Taste of the Ocean's Bounty",
		description:
			"At Odin, we are passionate about bringing the freshest seafood from the ocean to your plate. Inspired by the legendary Norse god of the sea, we believe in capturing the bounty of the ocean and transforming it into culinary masterpieces. Our commitment to sustainable practices ensures the quality of our ingredients while respecting the delicate balance of the marine environment. Join us for an unforgettable dining experience that celebrates the wonders of the sea.",
		imgSrc: about1Img,
	},
	{
		title: "Where Seafood Meets Myth",
		description:
			"Odin's legend lives on in every dish we serve. We take inspiration from the Norse god of the sea, known for his wisdom and power. Just as Odin cast his net to gather knowledge, we source the finest catches from the ocean depths. Our menu is a journey through the mythical realm of flavor, featuring innovative dishes that pay homage to the bounty of the sea.  Embark on a culinary adventure at Odin and discover a taste unlike any other.",
		imgSrc: about2Img,
	},
	{
		title: "A Family Tradition, Served Fresh Daily",
		description:
			"Our story began as a family's love for the ocean and the freshest seafood. Inspired by generations of fishermen, we at Odin are dedicated to preserving this legacy. We source our ingredients locally, ensuring the quality and sustainability of every dish.  Our warm and inviting atmosphere reflects the spirit of togetherness, making Odin the perfect place to gather with loved ones and savor the taste of the sea.",
		imgSrc: about3Img,
	},
];

const aboutContent = document.createElement("div");
aboutContent.id = "about";

aboutItems.forEach((item, index) => {
	const titleHeading = document.createElement("h2");
	titleHeading.textContent = item.title;

	const descriptionContent = document.createElement("p");
	descriptionContent.textContent = item.description;

	const aboutImage = new Image();
	aboutImage.src = item.imgSrc;

	for (const element of [titleHeading, descriptionContent, aboutImage]) {
		element.classList.add(`item${index + 1}`);
		aboutContent.append(element);
	}
});

export default aboutContent;
