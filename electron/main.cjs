const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
let mainWindow = null

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs')
    }
  })

  mainWindow.setMenu(null)
  mainWindow.loadURL('http://localhost:5173')
}

app.whenReady().then(createMainWindow)