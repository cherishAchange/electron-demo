import '@umijs/max/typings';
import { ipcRenderer } from 'electron';

declare global {
  interface Window {
    backend: {
      sendMessage(channel: string, args: any): ipcRenderer;
      listenMessage<Callback>(channel: string, callback: Callback): void;
    }
  }
}