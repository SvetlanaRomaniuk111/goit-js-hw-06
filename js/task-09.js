function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const currentColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
const body = document.body;

changeColor.addEventListener('click', () => {
	const color = getRandomHexColor();
	currentColor.textContent = color;
	body.style.backgroundColor = color;
	// console.log(currentColor.textContent);
});
