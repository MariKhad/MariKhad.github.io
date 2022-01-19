function Calc(x, y, op) {
	let result;
	const isOperatorValid = (op === "+") || (op === "-") || (op === "/") || (op === "*") || (op === "**") || (op === "%");
	const isOperandValid = (x !== undefined) || (y !== undefined);
	const isNumber = (typeof x === "number") && (typeof y === "number");
	if (!isOperatorValid || op === undefined) {
		console.log('unknown operation');
	} else if (!isOperandValid || !isNumber) {
		console.log('Error');
	} else if (op === "+") {
		result = x + y;
	} else if (op === "-") {
		result = x - y;
	} else if (op === "*") {
		result = x * y;
	} else if (op === "/") {
		result = x / y;
	} else if (op === "**") {
		result = x ** y;
	} else if (op === "%") {
		result = x % y;
	}
	return result;
}

console.log(Calc(12, 3, "/"));

