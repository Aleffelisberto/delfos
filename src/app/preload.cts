const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  printMyName: (name: string) => console.log(`Hello ${name}!\n`),
});
