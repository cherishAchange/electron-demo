const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = async () => {
  const win = new BrowserWindow({
    webPreferences: {
      width: 800,
      height: 600,
      preload: path.join(__dirname, 'preload.js'),
      devTools: true,
    }
  });

  await win.loadFile(path.join(__dirname, '../front-end/dist/index.html'));

  return win;
};

app.whenReady().then(async () => {

  const win = await createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  ipcMain.once('window.isInit', (data) => {
    console.log('[窗口界面加载完成！！！]', data);
  });

  ipcMain.on('window.call', (data) => {
    win.webContents.send('main.call', ['this is main']);
  });
});

app.on('window-all-closed', () => {
  app.quit();
});