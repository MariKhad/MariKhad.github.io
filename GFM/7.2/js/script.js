
addEventListener("DOMContentLoaded", onReady); 

function onReady() {
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