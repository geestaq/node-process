//zaladowanie modulow
const os = require('os');
const tc = require('./TimeConverter');

//eksport funkcji
module.exports = {
    print: getOSinfo
};

//wyswietla informacje o systemie
function getOSinfo() {
	let type = os.type();
	const release = os.release();
	if(type === 'Darwin') {
		type = 'OSX';
	} else if(type === 'Windows_NT') {
		type = 'Windows';
	}
	console.log('System:', type);
	console.log('Wydanie:', release);
	const cpu = os.cpus()[0].model;
	console.log('Model CPU:', cpu);
	const uptime = tc.secToHours(os.uptime());
	console.log('Czas pracy: ~ ' + uptime.hours + 'godz. ' + uptime.minutes + 'min. '+ uptime.seconds + 'sek.');
	const userInfo = os.userInfo();
	console.log('Użytkownik:', userInfo.username);
	console.log('Katalog domowy:', userInfo.homedir);
}
