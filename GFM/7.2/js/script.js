addEventListener("DOMContentLoaded", onReady); 

function onReady() {
<<<<<<< HEAD
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





=======
    Prefixes();
}

function Prefixes(){
let a = 1, b = 1;
let d = b++;
let c = ++a;
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
result1.innerHTML = `// c = ${c} a = ${a}`; 
result2.innerHTML = `// b = ${b} d = ${d}`;
}
>>>>>>> main
