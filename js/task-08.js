
// Напиши скрипт управления формой логина.
//Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, 
//а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const formRefs = document.querySelector('.login-form');
console.log(formRefs);

formRefs.addEventListener('submit',formSubmit);

function formSubmit(event) {
	event.preventDefault();
	console.dir(event.currentTarget.elements);
	const mail = event.currentTarget.elements.email.value;
	console.log(mail);
	const password = event.currentTarget.elements.password.value;
	console.log(password);
	if (mail === '' || password === '') {
		alert('Заполните все поля');
	}
	const formData = {
		mail,
		password,
	}
	console.log(formData);
	
	formRefs.reset();

}