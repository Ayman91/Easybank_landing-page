const menuIcon = document.querySelector(".menu--icon"),
	closeIcon = document.querySelector(".close--icon"),
	overlay = document.querySelector(".overlay"),
	navItems = document.querySelector(".nav--items");

console.log(menuIcon, closeIcon, overlay);

menuIcon.addEventListener("click", () => {
	closeIcon.style.display = "block";
	overlay.style.display = "block";
	menuIcon.style.display = "none";
	navItems.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
	closeIcon.style.display = "none";
	overlay.style.display = "none";
	menuIcon.style.display = "block";
	navItems.style.display = "none";
});
