const slider = document.querySelector(".slider");

const images = [
	"assets/img (1).jpg",
	"assets/img (2).jpg",
	"assets/img (3).jpg",
	"assets/img (4).jpg",
	"assets/img (5).jpg",
	"assets/img (6).jpg",
	"assets/img (7).jpg",
	"assets/img (8).jpg",
	"assets/img (9).jpg",
	"assets/img (10).jpg",
];

images.forEach((src, index) => {
	const item = document.createElement("div");
	item.classList.add("item");

	const img = document.createElement("img");
	img.src = src;
	img.alt = `Image ${index + 1}`;
	item.appendChild(img);
	slider.appendChild(item);
});

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
	let position = (index + 1 - 1) * (360 / items.length);
	item.style.transform = `rotateY(${position}deg) translateZ(550px)`;

	item.addEventListener("mouseenter", () => {
		slider.style.animationPlayState = "paused";
	});

	item.addEventListener("mouseleave", () => {
		slider.style.animationPlayState = "running";
	});
});

const rotateSlider = () => {
	slider.style.animation = "rotateSlider 40s linear infinite";
};

rotateSlider();
