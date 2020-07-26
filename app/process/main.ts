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
		options: {
			fullscreen: true
		},
		width: 1040,
	});

	// and load the index.html of the app.
	mainWindow.loadFile(path.join(__dirname, 'index.html'));

	// Open the DevTools.
	mainWindow.webContents.openDevTools();
}


// Cette méthode sera appelée quant Electron aura fini
// de s'initialiser et prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quand cet événement est émit.
app.whenReady().then(createWindow)

// Quitter si toutes les fenêtres ont été fermées.
app.on('window-all-closed', () => {
	// Sur macOS, il est commun pour une application et leur barre de menu
	// de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	// Sur macOS, il est commun de re-créer une fenêtre de l'application quand
	// l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
})