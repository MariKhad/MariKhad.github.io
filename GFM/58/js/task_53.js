const firstName = 'artem';
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName}`;


const buttonSubmit = document.querySelector('button');
const inputValue = document.querySelector('input');
inputValue.setAttribute(value, "text");

buttonSubmit.addEventListener('click', function {
	alert("Кнопка нажата!!")
})