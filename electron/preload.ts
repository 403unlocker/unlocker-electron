import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("ipcRenderer", {});
