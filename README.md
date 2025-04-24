# 🔓 403 Unlocker GUI

403 Unlocker GUI is a desktop app built with Electron, Vite, and React that helps you check whether a domain is filtered (blocked) and tests which DNS providers can unlock access to it.

### ✨ Features

- Detect if a domain is blocked (HTTP 403 or DNS filtered)
- Automatically test multiple DNS servers to find which ones can resolve the blocked domain
- Clean and responsive UI built with React
- Super fast performance thanks to Vite + Electron

### 🧰 Tech Stack

- React
- Vite
- Electron
- Tailwindcss

### 🚀 How It Works

1. Enter a domain (e.g., hub.docker.com)
2. The app checks if it's blocked or filtered by your current network
3. It tests various DNS servers to see which ones can resolve the domain successfully
4. Displays the working DNS servers that can bypass the block

### 🧪 Use Cases

- Quickly identify DNS-level restrictions
- Discover which DNS providers can bypass filtering
- Useful for devs, researchers, and internet freedom enthusiasts

### 📦 Downloads

- 🪟 Windows (.exe): [Download here](https://github.com/403unlocker/unlocker-electron/releases/download/v0.1.10/403-Unlocker-win-x64-0.1.10.exe)
- 🍎 macOS (.dmg): [Download here](https://github.com/403unlocker/unlocker-electron/releases/download/v0.1.10/403-Unlocker-mac-arm64-0.1.10.dmg)
- 🐧 Linux (.AppImage): [Download here](https://github.com/403unlocker/unlocker-electron/releases/download/v0.1.10/403-Unlocker-linux-x86_64-0.1.10.AppImage)

### 📝 License

This project is licensed under the zlib License.
<br>
See the [LICENSE](./LICENSE) file for details.
