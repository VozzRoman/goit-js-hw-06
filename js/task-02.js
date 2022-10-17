
// В HTML есть пустой список ul#ingredients.

// В JavaScript есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

//Вариант 1
// for (const element of ingredients) {
// 	const itemEl = document.createElement('li');
// 	itemEl.classList.add('item');
// 	itemEl.textContent = element;
// 	console.log(itemEl);
// 	console.log(listEl);
// 	listEl.append(itemEl);
// }


//Вариант 2
const addingIng = ingredients.map(element => {
	const itemEl = document.createElement('li');
	itemEl.classList.add('item');
	itemEl.textContent = element;
	return itemEl;
	
})
listEl.append(...addingIng);