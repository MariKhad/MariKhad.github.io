function calc(op,x,y) {
	const isNotNumber = (typeof x !== "number" || typeof y !== "number");
		if (isNotNumber) {
	  return "Error";
	  }
		switch (op) {
		case "sum":
		return x+y;
		case "min":
		return x-y;
		case "multi":
		return x*y;
		case "div":
		return (y != 0) ? x/y : "It is forbidden to divide by zero";
		case "expo":
		return x**y;
		case "rem":
		return x%y;
		default: return "Unknown operation"; }
	}
	
	console.log(calc("sum", 478, 6));