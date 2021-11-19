/* let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user.name); */

/* function isEmpty(obj) {
	for (let key in obj) {
		return false; }
	 {
		return true;
	}
	}

let schedule = {};

console.log (isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
console.log( isEmpty(schedule); */

/* let salaries = {
	John: 160,
	Ann: 130,
	Pete: 100,
}

for (let key in salaries) {
let	sum = sum+salaries[key];
}

console.log(sum); */

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
 };

 function multiplyNumeric(obj){
	 for(let key in obj)
	 if (typeof key == "number"){
	 return key *= 2
	 }
}

multiplyNumeric(menu);
for (let item in menu)
console.log(menu[item])