function Calc(op, x, y,) {
	let result;
	// "+" = sum, "-" = sub, "*" = multi, "/" = div, "**" = exp, "%" = rem
	//const isOperatorValid = (op === "sum") || (op === "sub") || (op === "div") || (op === "multi") || (op === "**") || (op === "rem"); Не пригодилось
	const isNumber = (typeof x === "number") && (typeof y === "number");
	const isOperandValid = (x !== undefined) || (y !== undefined);
	if (!isOperandValid || !isNumber) {
		result = 'Error';
	} else {
	switch (op) {
	case "sum": 
		result = x + y;
		break;
	case "sub":
		result = x - y;
		break;
	case "multi":
		result = x * y;
		break;
	case "div":
		result = x / y;
		break;
	case "exp":
		result = x ** y;
		break;
	case "rem":
		result = x % y;
		break;
	default:
		result = 'unknown operation';
	}	
}
	return result;
}

console.log(Calc("^^", 3, 4));
