const input = document.querySelector('#validation-input');

input.addEventListener('blur', validateInput);
const inputLength = Number(input.dataset.length);
console.log(inputLength);

function validateInput() {
	input.value.trim().length === inputLength
		? changeClass('valid', 'invalid')
		: changeClass('invalid', 'valid');
}

function changeClass(first, second) {
	input.classList.add(first);
	input.classList.remove(second);
}
