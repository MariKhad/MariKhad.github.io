function showVerticalMessage(str) {
	if (str.length > 10) {
		stringName = str.slice(0, 10);
	}
	else str = stringName;
	if (stringName[0] === "м") {
		stringName = "M" + stringName.slice(1);
	}
	for (let char of stringName)
		console.log(char);
}

showVerticalMessage('международный')