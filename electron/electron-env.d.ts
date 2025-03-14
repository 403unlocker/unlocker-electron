/// <reference types="vite-plugin-electron/electron-env" />

interface DnsData {
  name: string;
  server: string;
  isOnline: boolean;
}

declare namespace NodeJS {
  interface ProcessEnv {
    APP_ROOT: string;
    VITE_PUBLIC: string;
  }
}

interface Window {
  api: {
    isForbidden(name: string, url: string, server: string): Promise<DnsData>;
  };
}
