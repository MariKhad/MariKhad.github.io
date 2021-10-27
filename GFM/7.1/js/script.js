addEventListener("DOMContentLoaded", onReady); 

function onReady() {
     document.getElementById('salary').oninput = up
     document.getElementById('time').oninput = up
	  document.getElementById('butt').onclick = checkResult;
}




function checkResult() {
	let salary = document.getElementById('salary').value;
	let time = document.getElementById('time').value;
	if (salary == 0) {
		document.getElementById('salary').value = "";
		return result.innerHTML = 'То есть хочешь сказать что работал за бесплатно? Печально...';
	}
	else if (time == 0) {
		document.getElementById('time').value = "";
		return result.innerHTML = 'То есть тебе заплатили просто так? Не верю!';
}
	else {
	getResult();
	}
}

function up(e1) {
	let elem = e1.target
	elem.value = elem.value.replace(/\D/g, '')
}



function getResult() {
	salary = document.getElementById('salary').value;
	time = document.getElementById('time').value;
	let result = document.getElementById('result');
	let calc = salary/time;
	calc=calc.toFixed(2);
	let rubName = resultRubName(calc, ['рубль', 'рубля', 'рублей']);
	let textMessage = alertResult (calc, 
		["Ммм.. Да ты крут!! Позанимаешься со мной?",
		"Впринципе неплохо, но определенно есть куда расти!",
		"Ну для новичка может и сойдет, но я думаю ты достоин большего!",
		"Что-то как-то мало... Может выгоднее работать за еду?"])
	return result.innerHTML = `Результат: ваш труд стоил ${calc} ${rubName} в час <br /> <br />  ${textMessage}`;
}

function resultRubName(rubValue, textForms) {
	rubValue = Math.abs(rubValue) % 100;
	let rubValueNext = rubValue % 10;
	if (rubValue > 10 && rubValue < 20) { return textForms[2]; }
	if (rubValueNext > 1 && rubValueNext < 5) { return textForms[1]; }
	if (rubValueNext == 1) { return textForms[0]; }
	return textForms[2];
}



function alertResult (hourRate, textResult) {
	 if (hourRate < 50) {
		return textResult[3];
	}
		else if (hourRate > 50 && hourRate < 500) {
			return textResult[2];
		}
			else if (hourRate > 500 && hourRate < 1000) {
				return textResult[1];
			}
				else {
					return textResult[0];
				}

}




