function showResultType(x, op, y) {
	let code = x + op + y;
	code = String(code);
	let result = eval(code);
	console.log('Результат данного выражения будет:')
	console.log(result);
	console.log('Тип данного выражения будет:')
	console.log(typeof (result));
}

showResultType("'яблоки'", '&&', true);