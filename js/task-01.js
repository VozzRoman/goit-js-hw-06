
// В HTML есть список категорий ul#categories.
// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.


const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);
for (let i = 0; i < categories.length; i++) {
	const element = categories[i];
	console.log('Category:', element.firstElementChild.textContent);
	console.log('elements:', element.lastElementChild.children.length);

}