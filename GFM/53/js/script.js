let firstName = "";
const serverUrl1 = 'https://api.genderize.io';
const serverUrl2 = 'https://api.nationalize.io';
let serverAnswer = "";


const buttonSubmit = document.querySelector('button');
const inputValue = document.querySelector('input');
const taskResult = document.querySelector('.task__result')


buttonSubmit.addEventListener('click', async function () {
	const firstName = inputValue.value;
	const url1 = `${serverUrl1}?name=${firstName}`;
	const url2 = `${serverUrl2}?name=${firstName}`;

	let response1 = await fetch(url1);

	if (response1.ok) {
		let json = await response1.json();

		let response2 = await fetch(url2);

		if (response2.ok) {
			let json2 = await response2.json();

			taskResult.textContent = `${firstName} is ${json.gender} from ${json2.country[0].country_id}`;

		} else {
			alert("Ошибка HTTP2: " + response2.status);
		}
	} else {
		alert("Ошибка HTTP1: " + response1.status);
	}





});

