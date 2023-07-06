const authForm = document.querySelector('.login-form');

const result = {};

authForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const enterEmail = authForm.elements['email'].value;
	const enterPassword = authForm.elements['password'].value;
	if (!enterEmail || !enterPassword) {
		alert('всі поля повинні бути заповнені');
	} else {
		result.email = enterEmail;
		result.password = enterPassword;
		console.log(result);
		authForm.reset();
	}
});
