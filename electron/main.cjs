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

ipcMain.handle('auth:login', async (_,data) => {
  
  console.log(data)
})

app.whenReady().then(createMainWindow)