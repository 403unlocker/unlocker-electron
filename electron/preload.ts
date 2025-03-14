import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  isForbidden: (name: string, url: string, server: string) =>
    ipcRenderer.invoke("isForbidden", name, url, server),
});
