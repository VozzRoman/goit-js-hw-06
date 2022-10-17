

//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет 
//инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

const controlSizeRefs = document.querySelector('#font-size-control');
console.log(controlSizeRefs);
const textRef = document.querySelector('#text');

controlSizeRefs.addEventListener('click', drugSize);

function drugSize(event) {
	console.log(event.currentTarget.value);
	const fontSizeText = event.currentTarget.value;
	textRef.style.fontSize = `${fontSizeText}px`;
}