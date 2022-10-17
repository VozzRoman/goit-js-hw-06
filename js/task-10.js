
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество 
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.


const controlRefers = document.querySelectorAll('#controls button');
console.log(controlRefers);
const inputResfs = document.querySelector('input');
console.log(inputResfs.value);
const boxesResf = document.querySelector('#boxes');
console.log(boxesResf);



let boxSize = 30;

controlRefers[0].addEventListener('click', createBosex);
controlRefers[1].addEventListener('click', destroyBoxes);

function createBosex() {
	const counterBox = Number(inputResfs.value);
	const part = document.createDocumentFragment();
	for (let i = 0; i < counterBox; i+=1) {
	boxSize += 10
	const boxEl = document.createElement('div');
	boxEl.style.width = boxSize + "px";
	boxEl.style.height = boxSize + "px";
	boxEl.style.backgroundColor = getRandomHexColor();
	boxEl.classList.add('new-box');
	console.log(boxEl);
		part.append(boxEl);
		console.log(part);
		
	}
	boxesResf.append(part);
}




function destroyBoxes() {
	const newBoxRefs = document.querySelectorAll('.new-box');
	for (const box of newBoxRefs) {
		boxesResf.removeChild(box);
	}
	inputResfs.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
