import "./contact.css";
import imgSrc from "../../images/restaurant.jpg";

const contactContent = document.createElement("div");

contactContent.id = "contact";
contactContent.innerHTML = `
	<div class="contacts">
	<h2>Contact Us</h2>
	<div>
		<p class="address">10 Trident Way, Salty Shores, CA 90210</p>
		<p class="phone-num">(555) 555-FISH (3474)</p>
		<p>
			<a href="mailto:lambrous777@gmail.com" class="email"
				>lambrous@outlook.ph</a
			>
		</p>
	</div>
	<div>
		<p>Facebook: <a href="">@OdinSeafoodRestaurant</a></p>
		<p>Instagram: <a href="">@odin_seafood </a></p>
		<p>
			GitHub:
			<a href="https://github.com/lambrous" target="_blank"
				>@lambrous</a
			>
		</p>
	</div>
	</div>
	<img
	src="${imgSrc}"
	alt="restaurant"
	/>
`;

export default contactContent;
