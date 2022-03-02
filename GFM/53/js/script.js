let firstName;
const serverUrl = 'https://api.genderize.io';
const url = `${serverUrl}?name=${firstName}`;


const buttonSubmit = document.querySelector('button');
const inputValue = document.querySelector('input');
const taskResult = document.querySelector('.task__result')
firstName = inputValue.textContent;

buttonSubmit.addEventListener('click', function (){
	alert("идет отправка запроса");
	fetch(url)
    .then(response => alert(response.text()));
//taskResult.textContent = `${firstName} is ${serverAnswer}`;
})