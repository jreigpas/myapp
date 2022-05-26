export {};

declare global {
  interface Window {
    getFromNative: any;
    Native: any;
  }
}
