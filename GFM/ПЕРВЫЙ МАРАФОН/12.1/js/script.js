addEventListener("DOMContentLoaded", onReady); 

function onReady() {
document.getElementById('buttOR').onclick = alertOR;
document.getElementById('buttOR2').onclick = alertOR2;
document.getElementById('buttAND').onclick = alertAND;
document.getElementById('buttAND2').onclick = alertAND2;
document.getElementById('buttOrAnd').onclick = alertOrAnd;
document.getElementById('IF').onclick = variantIF;
document.getElementById('ageButt').onclick = ageRes;
document.getElementById('ageButt2').onclick = ageRes2;
document.getElementById('passButt').onclick = Pass;

document.addEventListener('keydown', function(e) {
	if (e.code === 'ControlLeft') {
		alert('Пароль "Я главный"');
	} 
 });


}

function alertOR() {
	alert( null || 2 || undefined );
}

function alertOR2() {
	alert( alert(1) || 2 || alert(3) );
}

function alertAND() {
	alert( 1 && null && 2 );
}


function alertAND2() {
	alert( alert(1) && alert(2) );
}

function alertOrAnd() {
	alert( null || 2 && 3 || 4 );
}

function variantIF() {
if (-1 || 0) {alert( 'first' );
IF1.innerHTML = `// Условие в if = ${(-1 || 0)}`;
}
if (-1 && 0) {alert( 'second' );}
else{
IF2.innerHTML = `// Условие в if = ${(-1 && 0)}. Условие ложно`;
}
if (null || -1 && 1) { alert( 'third' );
IF3.innerHTML = `// Условие в if = ${(null || -1 && 1)}`;
}
}

function ageRes() {	
let age = document.getElementById('age').value;
if (age >= 14 && age <= 90) {
	alert('Переменная age находится в диапазоне от 14 до 90');
} else
	alert('Переменная age вне диапазона от 14 до 90');
}

function ageRes2(){
	let age2 = document.getElementById('age2').value;
	if (!(age2 >= 14 || age2 <= 90)) {
		alert('Переменная age HE находится в диапазоне от 14 до 90');
	} else
	alert('Переменная age находится в диапазоне от 14 до 90');
}

function Pass() {
namePass = prompt("Кто там?", "Киану Ривз");
if (namePass == "Админ"){
	passWord = prompt("Введите пожалуйста пароль")
	if (passWord == "Я главный") {
		alert("Здравствуйте");
	}
 else alert("Неверный пароль");
}
else  alert("Я вас не знаю");
} 
