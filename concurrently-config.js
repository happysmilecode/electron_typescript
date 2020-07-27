const concurrently = require('concurrently');
concurrently([
	{ command: 'npm:brunch:w', name: ' brunch ', prefix: 'name', prefixColor: 'green' },
	{ command: 'npm:electron', name: 'electron', prefix: 'name', prefixColor: 'blue' }
], {
	raw: true,
	prefix: 'name',
	killOthers: ['failure', 'success'],
});