
//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



// ВАРИАНТ 1
// let counterValue = 0;

// const increaseBth = document.querySelector('[data-action="increment"]');
// const decreaseBth = document.querySelector('[data-action="decrement"]');
// const valueNumber = document.querySelector('#value');
// console.log(valueNumber);

// increaseBth.addEventListener('click', plusClick);
// decreaseBth.addEventListener('click', minusClick);
// function plusClick() {
// 	valueNumber.textContent = counterValue +=1;
// }
// function minusClick() {
// 	if (valueNumber.textContent > 0) {
// 		valueNumber.textContent = counterValue -= 1;
// 	} else {
// 		valueNumber.textContent = 0; //:)
// 	}
	
// }


// ВАРИАНТ 2
let counterValue = 0;

const counterRefers = document.querySelectorAll('#counter button');
const valueNumber = document.querySelector('#value');

counterRefers[0].addEventListener('click', minusBth);
counterRefers[1].addEventListener('click', plusBth);

function minusBth() {
	 	if (valueNumber.textContent > 0) {
		valueNumber.textContent = counterValue -= 1;
	} else {
		valueNumber.textContent = 0; //:)
	}
	
}

function plusBth() {
	valueNumber.textContent = counterValue +=1;
}

