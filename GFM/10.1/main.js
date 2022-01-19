function Calc(op, x, y,) {
	let result;
	// "+" = sum, "-" = sub, "*" = multi, "/" = div, "**" = exp, "%" = rem
	//const isOperatorValid = (op === "sum") || (op === "sub") || (op === "div") || (op === "multi") || (op === "**") || (op === "rem"); Не пригодилось
	const isNumber = (typeof x === "number") && (typeof y === "number");
	const isOperandValid = (x !== undefined) || (y !== undefined);
	if (!isOperandValid || !isNumber) {
		result = 'Error';
	} else if (op === "sum") {
		result = x + y;
	} else if (op === "sub") {
		result = x - y;
	} else if (op === "multi") {
		result = x * y;
	} else if (op === "div") {
		result = x / y;
	} else if (op === "exp") {
		result = x ** y;
	} else if (op === "rem") {
		result = x % y;
	} else {
		result = 'unknown operation';
	}
	return result;
}

console.log(Calc("multi", 333, 17));

