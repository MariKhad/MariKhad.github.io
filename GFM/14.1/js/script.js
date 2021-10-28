addEventListener("DOMContentLoaded", onReady); 

function onReady() {
	document.getElementById('butt').onclick = Calc;
	
}

/* function EnterKeyPress() {
	addEventListener('keydown', EnterKeyPress(e))
		if (e.keyCode === 13) {
		Calc();
	 }
 } 
 */

/* function up(e1) {
	let elem = e1.target
	elem.value = elem.value.replace(/\D/g, '')
} */

/* if ((/\D/.test(x)) || (/\D/.test(y)) ) {
	result.innerHTML = `Программа принимает только числовые значения`;
	document.getElementById('opX').value = "";
	document.getElementById('opY').value = "";
}  */

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
 }

 function findOperator() {
	let x = document.getElementById('opX').value;
	let y = document.getElementById('opY').value;
	let operator = document.getElementById('op').value;
	if (operator == "+") {
		result.innerHTML = `Решение: ${+x + +y}`
	} else if (operator == "-") {
		result.innerHTML = `Решение: ${x-y}`
	} else if (operator == "*") {
		result.innerHTML = `Решение: ${x*y}` 
	} else if (operator == "/") {
		result.innerHTML = `Решение: ${x/y}` 
	} else if (operator == "%") {
		result.innerHTML = `Решение: ${x%y}` 
	} else if (operator == "**") {
		result.innerHTML = `Решение: ${x**y}` 
	} else {
	result.innerHTML = `<span class="alert">Введенное значение не является рабочим оператором.`;// Для помощи нажмите F1</span>
	}
 }

function Calc() {
	let x = document.getElementById('opX').value;
	let y = document.getElementById('opY').value;
	let result = document.getElementById('result');
	if (isNumber(x) && isNumber(y)) {
	findOperator();
	}
	else {
	result.innerHTML = `<span class="alert">Программа принимает только числовые значения!!</span>`
	document.getElementById('opX').value = "";
	document.getElementById('opY').value = "";
	}
	
}




