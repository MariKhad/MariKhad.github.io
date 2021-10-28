addEventListener("DOMContentLoaded", onReady); 

function onReady() {
     document.getElementById('opX').oninput = up;
     document.getElementById('opY').oninput = up;
	  document.getElementById('plus').onclick = addition;
	  document.getElementById('minus').onclick = subtraction;
	  document.getElementById('multi').onclick = multiplication;
	  document.getElementById('divide').onclick = division;
}

function up(e1) {
	let elem = e1.target
	elem.value = elem.value.replace(/\D/g, '')
}

function addition() {
	let x = document.getElementById('opX').value;
	let y = document.getElementById('opY').value;
	let result = document.getElementById('result');
	let calc = +x+ +y;
	return result.innerHTML = `Решение: ${calc}`;
}

function subtraction() {
	let x = document.getElementById('opX').value;
	let y = document.getElementById('opY').value;
	let result = document.getElementById('result');
	let calc = x-y;
	return result.innerHTML = `Решение: ${calc}`;
}

function multiplication() {
	let x = document.getElementById('opX').value;
	let y = document.getElementById('opY').value;
	let result = document.getElementById('result');
	let calc = x*y;
	return result.innerHTML = `Решение: ${calc}`;
}

function division() {
	let x = document.getElementById('opX').value;
	let y = document.getElementById('opY').value;
	let calc = x/y;
	let result = document.getElementById('result');
	(y == 0) ? result.innerHTML = 'На ноль делить нельзя' : result.innerHTML = `Решение: ${calc}`;
}


