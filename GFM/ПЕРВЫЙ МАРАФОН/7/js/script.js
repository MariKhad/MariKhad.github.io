
addEventListener("DOMContentLoaded", onReady); 

function onReady() {
    prefixes();
	 assigning();
	 typeTransform();
	 document.getElementById('launchAdd').onclick = correctAdition;
}

function prefixes(){
let a = 1, b = 1;
let d = b++;
let c = ++a;
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
result1.innerHTML = `// c = ${c} a = ${a}`; 
result2.innerHTML = `// b = ${b} d = ${d}`;
}

function assigning(){
	let a = 2;
	let x = 1 + (a *= 2);
	result3.innerHTML = `// a = ${a} x = ${x}`; 
}

function typeTransform() {
result6.innerHTML = `// ${"" + 1 + 0}`; 
result7.innerHTML = `// ${"" - 1 + 0}`; 
result8.innerHTML = `// ${true + false}`; 
result9.innerHTML = `// ${6 / "3"}`; 
result10.innerHTML = `// ${"2" * "3"}`; 
result11.innerHTML = `// ${4 + 5 + "px"}`; 
result12.innerHTML = `// ${"$" + 4 + 5}`; 
result13.innerHTML = `// ${"4" - 2}`; 
result14.innerHTML = `// ${"4px" - 2}`; 
result15.innerHTML = `// ${7 / 0}`; 
result16.innerHTML = `// ${"  -9  " + 5}`; 
result17.innerHTML = `// ${"  -9  " - 5}`; 
result18.innerHTML = `// ${null + 1}`; 
result19.innerHTML = `// ${undefined + 1}`; 
result20.innerHTML = `// ${" \t \n" - 2}`; 
}

function correctAdition() {
let a= prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
result4.innerHTML = `// ${a+b}`; 
result5.innerHTML = `// ${+a + +b}`; 
}