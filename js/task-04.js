const valueElm = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrementClick = () => {
	counterValue -= 1;
	valueElm.innerHTML = counterValue;
};
decrementBtn.addEventListener('click', decrementClick);

const incrementClick = () => {
	counterValue += 1;
	valueElm.innerHTML = counterValue;
};
incrementBtn.addEventListener('click', incrementClick);
