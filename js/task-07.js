const inputElm = document.querySelector('#font-size-control');
const textElm = document.querySelector('#text');

const textSize = (event) => {
	textElm.style.fontSize = `${event.currentTarget.value}px`;
};
inputElm.addEventListener('input', textSize);

//--------------------------
// const inputElm = document.querySelector('#font-size-control');
// const textElm = document.querySelector('#text');

// inputElm.addEventListener('input', (event) => {
// 	textElm.style.fontSize = `${event.currentTarget.value}px`;
// });
