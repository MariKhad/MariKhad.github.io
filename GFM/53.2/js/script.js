const buttonSubmit = document.querySelector('button');
const inputValue = document.querySelector('input');
const taskResult = document.querySelector('.task__result');

buttonSubmit.addEventListener('click', async function findGenderCountry() {
	const serverUrl1 = 'https://api.genderize.io';
	const serverUrl2 = 'https://api.nationalize.io';
	const firstName = inputValue.value;
	const url1 = `${serverUrl1}?name=${firstName}`;
	const url2 = `${serverUrl2}?name=${firstName}`;

	Promise.all([
		await fetch(url1),
		await fetch(url2),
	])
		.then(async ([json1, json2]) => {
			const result1 = await json1.json();
			const result2 = await json2.json();
			taskResult.textContent = `${firstName} is ${result1.gender} from ${result2.country[0].country_id}`;
		})
});