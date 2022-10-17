

// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение 
// цвета в span.color.

const buttonRef = document.querySelector('.change-color');
console.log(buttonRef);
const bodyRef = document.querySelector('body');
console.log(bodyRef);
const texColorInfoRef = document.querySelector('.color');
console.log(texColorInfoRef);

buttonRef.addEventListener('click', chengeColor);

function chengeColor() {
	texColorInfoRef.textContent = bodyRef.style.backgroundColor;
	bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
	
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	
}

//Почему-то первый цвет не выводит значение! не могу понять почему?!

