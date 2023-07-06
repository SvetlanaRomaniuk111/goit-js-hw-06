const list = document.querySelectorAll('li.item');
console.log('Number of categories:', list.length);

[...list].forEach((item) => {
	console.log(`Categoty: ${item.querySelector('h2').textContent}`);
	console.log('Elemets:', item.querySelectorAll('li').length);
});
