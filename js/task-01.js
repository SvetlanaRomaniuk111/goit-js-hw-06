const list = document.querySelector('#categories');
const itemsList = list.querySelectorAll('.item');
console.log('Number of categories:', itemsList.length);

itemsList.forEach((item) => {
	console.log(`Categoty: ${item.firstElementChild.textContent}`);
	console.log('Elemets:', item.lastElementChild.children.length);
});

//----------
// const list = document.querySelectorAll('li.item');
// console.log('Number of categories:', list.length);

// [...list].forEach((item) => {
// 	console.log(`Categoty: ${item.querySelector('h2').textContent}`);
// 	console.log('Elemets:', item.querySelectorAll('li').length);
// });
//------------
