const inputElm = document.querySelector('#font-size-control');
const textElm = document.querySelector('#text');
inputElm.addEventListener('input', changeSize);
function changeSize() {
	textElm.style.fontSize = inputElm.value + 'px';
}
changeSize();
