const navbarOnScroll = () => {
	const navbar = document.querySelector("header");
	const scrollPosition = window.scrollY;

	if (scrollPosition > 0) {
		navbar?.classList.add("opaque");
	} else {
		navbar?.classList.remove("opaque");
	}
};

export default navbarOnScroll;
