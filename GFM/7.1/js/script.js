addEventListener("DOMContentLoaded", onReady); 

function onReady() {
     document.getElementById('x').oninput = up
     document.getElementById('y').oninput = up
	  document.getElementById('unar').onclick = getUnar;
	  document.getElementById('binar').onclick = getBinar;
}

function up(e1) {
	let elem = e1.target
	elem.value = elem.value.replace(/\D/g, '')
}



function getUnar() {
	let x = document.getElementById('x').value;
	let y = document.getElementById('y').value;
	let result = document.getElementById('result');
	let calc = x+y;
	return result.innerHTML = `Вы сложили строки: ${calc}`;
}

function getBinar() {
	let x = document.getElementById('x').value;
	let y = document.getElementById('y').value;
	let result = document.getElementById('result');
	x= +x;
	y= +y;
	let calc = x+y;
	return result.innerHTML = `Вы сложили числа: ${calc}`;
}





