import { CaptureScreen } from "@shared/types";

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: (channel: string, data: unknown) => void;
        on: (
          channel: string,
          listener: (event: unknown, ...args: unknown[]) => void
        ) => void;
      };
      captureScreen: CaptureScreen;
    };
  }
}

export {};
