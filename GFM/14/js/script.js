
addEventListener("DOMContentLoaded", onReady);

function onReady() {
	document.getElementById('check0').onclick = if0;
	document.getElementById('nameButt').onclick = checkName;
	document.getElementById('numButt').onclick = checkNum;
}

function if0() {
	if ("0") {
		alert('Привет');
	}
	result1.innerHTML = "// Да, выведется. Любая строка, кроме пустой (а строка '0' – не пустая), в логическом контексте становится true. ";
}

function checkName() {
	let value = document.getElementById('nameInput').value;
	if (value == 'ECMAScript' || value == 'ecmaScript' || value == 'ecmascript' || value == 'ECMAscript') {
		result2.innerHTML = "Верно!";
	} else {
		result2.innerHTML = "Не знаете? ECMAScript!";
	}
}

function checkNum() {
	let num = document.getElementById('numInput').value;
	if (num == 0) {
		result3.innerHTML = "Равно 0";
	} else if
		(num > 0) {
		result3.innerHTML = "Число положительное";
	} else {
		result3.innerHTML = "Число отрицательное";
	}
}

$(function () {
	$('#switch-btn-1').click(function () {
		$(this).toggleClass('switch-on');
		if ($(this).hasClass('switch-on')) {
			$(this).trigger('on.switch');
		} else {
			$(this).trigger('off.switch');
		}
	});
	$('#switch-btn-1').on('on.switch', function () {
		$('#block-1').addClass('bl-hide');
		$('#block-2').removeClass('bl-hide');
	});
	$('.switch-btn').on('off.switch', function () {
		$('#block-1').removeClass('bl-hide');
		$('#block-2').addClass('bl-hide');
	});
});

$(function () {
	$('#switch-btn-2').click(function () {
		$(this).toggleClass('switch-on');
		if ($(this).hasClass('switch-on')) {
			$(this).trigger('on.switch');
		} else {
			$(this).trigger('off.switch');
		}
	});
	$('#switch-btn-2').on('on.switch', function () {
		$('#block-3').addClass('bl-hide1');
		$('#block-4').removeClass('bl-hide1');
	});
	$('.switch-btn').on('off.switch', function () {
		$('#block-3').removeClass('bl-hide1');
		$('#block-4').addClass('bl-hide1');
	});
});



