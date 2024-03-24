const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('backend', {
  sendMessage(channel, args) {
    return ipcRenderer.send(channel, args);
  },
  listenMessage(channel, callback) {
    return ipcRenderer.on(channel, callback);
  },
});