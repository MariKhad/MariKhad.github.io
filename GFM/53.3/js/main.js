import { formElements } from './view.js';

formElements.formEl.addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();
	const serverUrl1 = 'https://api.genderize.io';
	const serverUrl2 = 'https://api.nationalize.io';
	const firstName = formElements.inputValue.value;
	const url1 = `${serverUrl1}?name=${firstName}`;
	const url2 = `${serverUrl2}?name=${firstName}`;

	fetch(url1)
		.then(response => response.json())
		.then(result1 => {
			let gender = result1.gender;
			fetch(url2)
				.then(response => response.json())
				.then(result2 => {
					let country = result2.country[0].country_id;
					formElements.taskResult.textContent = `${firstName} is ${gender} from ${country} `;
				});

		});
}   