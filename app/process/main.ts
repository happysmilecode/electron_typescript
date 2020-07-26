const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			nodeIntegrationInWorker: false
		},
		width: 1040,
	});

	// and load the index.html of the app.
	mainWindow.loadFile(path.join(__dirname, 'index.html'));

	// Open the DevTools.
	mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
})