const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

const inputYourText = ({ textContent }) => {
	inputText.value.trim() === ''
		? (outputText.innerText = 'Anonymous')
		: (outputText.innerText = inputText.value.trim());
};
inputText.addEventListener('input', inputYourText);

//--------- if-else --------
// const inputText = document.querySelector('#name-input');
// const outputText = document.querySelector('#name-output');

// const inputYourText = ({ textContent }) => {
// 	if (inputText.value.trim() === '') {
// 		outputText.innerHTML = 'Anonymous';
// 	} else {
// 		outputText.innerHTML = inputText.value.trim();
// 	}
// };
// inputText.addEventListener('input', inputYourText);
