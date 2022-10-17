
//Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на 
//правильное количество введённых символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur',offBlur);

function offBlur(event) {
	const numberOfElements = event.currentTarget.value.length;
	const limits = Number(inputEl.dataset.length);
	if (numberOfElements === limits) {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
	 } else {
		inputEl.classList.add('invalid');
		
	 }
}

