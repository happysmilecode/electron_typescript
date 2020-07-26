'use strict';
const { exec } = require('child_process');
const logger = require('loggy');

class ElectronBuilder {
	constructor(config) {
		logger.notificationsTitle = config.notifications.app || 'Electron builder'
	}

	onCompile() {
		logger.log('killing old process')
		exec('kill -9 $(ps aux | grep -e \'public/main.js\' | awk \'{print $2}\')')
		logger.log('restarting')
		exec('yarn electron')
	}
}

// Tell Brunch we are indeed a plugin for it
ElectronBuilder.prototype.brunchPlugin = true;

// The plugin has to be the module’s default export
module.exports = ElectronBuilder;