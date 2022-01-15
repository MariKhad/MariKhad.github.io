
window.addEventListener('load', onReady);

function onReady(){
document.getElementById('butt1').onclick = while1;
document.getElementById('butt2').onclick = while2;
document.getElementById('butt3').onclick = while3;
document.getElementById('butt4').onclick = while4;
document.getElementById('butt5').onclick = while5;
document.getElementById('butt6').onclick = while6;
document.getElementById('butt7').onclick = while7;
document.getElementById('butt8').onclick = while8;
}

function while1() {
let i = 3;
while (i) {
	alert(i--);
}
}

function while2() {
	let i = 0;
while (++i < 5) alert( i );
	}

function while3() {
let i = 0;
while (i++ < 5) alert( i );
	}
	function while4() {
		for (let i = 0; i < 5; ++i) alert( i );
}
	function while5() {
		for (let i = 0; i < 5; i++) alert( i );
			}
	function while6() {
		for (let i = 2; i < 12; i = i+2) {
				alert( i );
			}
			 }

function while7() {
let num;
do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);
							 }

 function while8() {
	let n
	nextPrime:
	for (let i = 2; i <= n; i++) { // Для всех i...
	
	for (let j = 2; j < i; j++) { // проверить, делится ли число..
	  if (i % j == 0) continue nextPrime; // не подходит, берём следующее
	}
	
	alert( i ); // простое число
	}
}	