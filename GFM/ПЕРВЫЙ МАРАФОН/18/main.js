function calc(op,x,y) {
const isNotNumber = (typeof x !== "number" || typeof y !== "number");
	if (isNotNumber)
	{return "Error";}
	else if (op === "sum")
	{return x+y;}
	else if (op === "min")
	{return x-y;}
	else if (op === "multi")
	{return x*y;}
	else if (op === "div")
	{return (y != 0) ? x/y : "It is forbidden to divide by zero";}
	else if (op === "expo")
	{return x**y;}
	else if (op === "rem")
	{return x%y;}
	else 
  return "Unknown operation"
}

console.log(calc("div", 70, 56));