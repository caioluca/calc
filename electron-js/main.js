const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
	const win = new BrowserWindow({ fullscreen: true, icon: path.join(__dirname, 'icon.png') })

	win.loadFile('./index.html')
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && createWindow)
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin')
		app.quit()
})