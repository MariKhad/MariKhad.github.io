function Calc(x, y, op) {
	let result;
	const isOperatorValid = (op === "+") || (op === "-") || (op === "/") || (op === "*") || (op === "**") || (op === "%");
	const isOperandValid = (x !== undefined) || (y !== undefined);
	const isNumber = (typeof x === "number") && (typeof y === "number");
	if (!isOperatorValid) {
		console.log('unknown operation');
	} else if (!isOperatorValid || !isNumber) {
		console.log('Error');
	} else if (op === "+") {
		return console.log(result = x + y);
	} else if (op === "-") {
		return console.log(result = x - y);
	} else if (op === "*") {
		return console.log(result = x * y);
	} else if (op === "/") {
		return console.log(result = x / y);
	} else if (op === "**") {
		return console.log(result = x ** y);
	} else if (op === "%") {
		return console.log(result = x % y);
	}
}
Calc(12, 4, "*");
