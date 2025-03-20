import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { app, BrowserWindow, ipcMain, shell } from "electron";
import { isForbidden } from "./utils/resolver";

if (process.env.APPIMAGE) app.setName("403 Unlocker Desktop");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.APP_ROOT = path.join(__dirname, "..");

export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;

function createWindow() {
  const iconPath = path.join(
    process.env.VITE_PUBLIC,
    os.platform() === "win32" ? "icon.ico" : "icon64.png",
  );

  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: iconPath,
    resizable: false,
    webPreferences: { preload: path.join(__dirname, "preload.mjs") },
  });

  win.setMenu(null);

  if (VITE_DEV_SERVER_URL) win.loadURL(VITE_DEV_SERVER_URL);
  else win.loadFile(path.join(RENDERER_DIST, "index.html"));
}

app.on("window-all-closed", () => {
  if (process.platform === "darwin") return;
  app.quit();
  win = null;
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.whenReady().then(createWindow);

ipcMain.handle("isForbidden", (_, name, url, server) =>
  isForbidden(name, url, server),
);

ipcMain.handle("openExternalLink", (_, url) => {
  shell.openExternal(url);
});
