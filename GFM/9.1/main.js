function countSalary(time, profit){
	console.log("Программа по расчету рентабельности проекта");
	checkResult(time,profit);
	}
	
	function checkResult(time, profit){
	if (time === 0) {
	console.log('То есть тебе заплатили просто так? Не верю!');
	}
	else if (profit === 0) {
	console.log('То есть хочешь сказать что работал за бесплатно? Печально...');
	}
	else {
	getResult(time, profit);
	}
	}
	
	
	function getResult(time, profit){
	let hourRate = profit/time;
	let textMessage = alertResult (hourRate, 
			["Ммм.. Да ты крут!! Позанимаешься со мной?",
			"Впринципе неплохо, но определенно есть куда расти!",
			"Ну для новичка может и сойдет, но я думаю ты достоин большего!",
			"Что-то как-то мало... Может выгоднее работать за еду?"])
	console.log(`Ваш заработок составил ${hourRate} р/час`);
	console.log(textMessage);
	}
	
	function alertResult (hourRate, textResult) {
		 if (hourRate < 50) {
			return textResult[3];
		}
			else if (hourRate > 50 && hourRate < 500) {
				return textResult[2];
			}
				else if (hourRate > 500 && hourRate < 1000) {
					return textResult[1];
				}
					else {
						return textResult[0];
					}
	
	}
	
	countSalary(500,200000);