function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const refs = {
	input: document.querySelector('input'),
	boxes: document.querySelector('#boxes'),
	createBtn: document.querySelector('[data-create]'),
	destroyBtn: document.querySelector('[data-destroy]'),
};

const inputOption = {
	min: Number(refs.input.min),
	max: Number(refs.input.max),
	step: Number(refs.input.step),
};

console.log(boxes);
// считываем введеннон число

const handleClick = () => {
	let amount = Number(refs.input.value);

	console.log('Button was clicked');
	if (amount < inputOption.min || amount > inputOption.max) {
		alert('min=1, max=100');
		return;
	}
	// создаем и добавляем div
	const boxArr = [];
	const size = 30;
	for (let i = 0; i < amount; i += inputOption.step) {
		let growingSize = size + i * 10;
		console.log(growingSize);

		const boxesEl = `<div style="width:${
			growingSize > 70 ? 70 : growingSize
		}px; height:${growingSize}px; background-color:${createRGB()}"></div>`;

		boxArr.push(boxesEl);
		console.log(refs.boxes);
		// console.log(boxesEl);
	}
	refs.boxes.insertAdjacentHTML('beforeend', boxArr.join(''));
};
refs.createBtn.addEventListener('click', handleClick);

// удаляем
const destroyBoxes = () => {
	refs.boxes.innerHTML = '';
	refs.input.value = '';
};
refs.destroyBtn.addEventListener('click', destroyBoxes);

const createRGB = () => {
	const red = Math.round(Math.random(0, 1) * 255);
	const green = Math.round(Math.random(0, 1) * 255);
	const blue = Math.round(Math.random(0, 1) * 255);
	return `rgb(${red},${green}, ${blue})`;
};
console.log(createRGB());
