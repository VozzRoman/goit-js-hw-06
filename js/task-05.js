
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет 
//его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".


const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const textEl = document.querySelector('#name-output');
console.log(textEl);

inputEl.addEventListener('input',onInpup);

function onInpup(event) {
	const simbols = textEl.textContent = event.currentTarget.value;
	if (simbols.length === 0) {
		textEl.textContent = "Anonymous";
	}
	
}