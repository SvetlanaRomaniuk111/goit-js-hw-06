const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

const inputYourText = ({ textContent }) => {
	inputText.value === ''
		? (outputText.innerText = 'Anonymous')
		: (outputText.innerText = inputText.value);
};
inputText.addEventListener('input', inputYourText);

//--------- if-else --------
// const inputText = document.querySelector('#name-input');
// const outputText = document.querySelector('#name-output');

// const inputYourText = ({ textContent }) => {
// 	if (inputText.value === '') {
// 		outputText.innerHTML = 'Anonymous';
// 	} else {
// 		outputText.innerHTML = inputText.value;
// 	}
// };
// inputText.addEventListener('input', inputYourText);
