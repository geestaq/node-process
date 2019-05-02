//eksport funkcji
module.exports = {
    secToHours: secToHours,
	secToMinutes: secToMinutes
};

//zwraca ilosc minut i sekund dla podanej ilosci sekund
function secToMinutes(sec) {
	sec = sec.toFixed(0);
	let result = {
		minutes: 0,
		seconds: 0
	};

	result.minutes = Math.floor(sec / 60);
	result.seconds = sec - result.minutes * 60;

	return result;
}

//zwraca ilosc godzin, minut i sekund dla podanej ilosci sekund
function secToHours(sec) {
	sec = sec.toFixed(0);
	let result = {
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	result.hours = Math.floor(sec / 3600);
	const tmp = secToMinutes(sec - result.hours * 3600);
	result.minutes = tmp.minutes;
	result.seconds = tmp.seconds;

	return result;
}
