const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
	input.value.length === 6
		? (input.classList = 'valid')
		: (input.classList = 'invalid');
	// console.log(input.value);
});
//---------- if-else ----------
// const input = document.querySelector('#validation-input');

// input.addEventListener('blur', () => {
// 	if (input.value.length === 6) {
// 		input.classList.add('valid');
// 	} else {
// 		input.classList.add('invalid');
// 	}
// });
