addEventListener("DOMContentLoaded", onReady); 

let x = document.getElementById('opX').value;
let y = document.getElementById('opY').value;
let result = document.getElementById('result');

function onReady() {
	document.getElementById('butt').onclick = Calc;
	// обработчик нажатия клавиши
 	document.addEventListener('keydown', function(e) {
		if (e.code === 'Enter') {
			Calc();
		} else if (e.code === 'ControlLeft') {
			alert('Поддерживаются следующие математические операторы: Сложение "+", Вычитание "-", Умножение "*", Деление "/", Взятие остатка от деления "%", Возведение в степень "**".');
		} 
	 });
	}

	
	// обработчик нажатия клавиши в виде функции (для практики)
	 /* function enterKeyPress(e) {
		if (e.code === 'Enter') { 
				Calc();
			}
	 } */


// Проверка на то что операнды являются числами.	 
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
 }

 function findOperator() {
	let operator = document.getElementById('op').value;
	if (operator == "+") {
		result.innerHTML = `Решение: ${+x + +y}`
	} else if (operator == "-") {
		result.innerHTML = `Решение: ${x-y}`
	} else if (operator == "*") {
		result.innerHTML = `Решение: ${x*y}` 
	} else if (operator == "/" && y == 0) {
		result.innerHTML = `<span class="alert">На ноль делить НЕЛЬЗЯ!!</span>` 
	} else if (operator == "/"){
		result.innerHTML = `Решение: ${x/y}` 
	}else if (operator == "%") {
		result.innerHTML = `Решение: ${x%y}` 
	} else if (operator == "**") {
		result.innerHTML = `Решение: ${x**y}` 
	} else {
	result.innerHTML = `<span class="alert">Введенное значение не является рабочим оператором. Для помощи нажмите левый Ctrl </span>`;
	}
 }

function Calc() {
	let x = document.getElementById('opX').value;
	let y = document.getElementById('opY').value;
	if (isNumber(x) && isNumber(y)) {
	findOperator();
	}
	else {
	result.innerHTML = `<span class="alert">Программа принимает только числовые значения!!</span>`
	document.getElementById('opX').value = "";
	document.getElementById('opY').value = "";
	}
	
}




