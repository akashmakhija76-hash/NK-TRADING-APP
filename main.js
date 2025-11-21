const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
let serverProcess;
function createWindow () {
  const win = new BrowserWindow({ width: 1200, height: 800, webPreferences: { nodeIntegration: false } });
  win.loadURL('http://localhost:3000');
}
app.whenReady().then(() => {
  // start the server (node app/server.js)
  serverProcess = spawn(process.execPath, [path.join(__dirname,'app','server.js')], { stdio: 'inherit' });
  createWindow();
  app.on('activate', function () { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
  if (serverProcess) serverProcess.kill();
});
