//zaladowanie modulow
const OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    const input = process.stdin.read();
	if(input !== null) {
		const instruction = input.toString().trim();
		switch(instruction) {
			case '/nodeversion':
				process.stdout.write('Wersja Node.js: ' + process.versions.node + '\n');
				break;
			case '/lang':
				console.log('Język:'.green, process.env.LANG);
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
    }
});
