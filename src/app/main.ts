import { app, BrowserWindow } from "electron";
import path from "path";
import { ipcMainHandle, ipcMainOn, isDev } from "./util.js";
import { getPreloadPath } from "./pathResolver.js";
import "dotenv/config";
import { CustomerController } from "./api/controllers/customerController.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: getPreloadPath(),
    },
    title: "Studio A - Gestão de Salão de Beleza",
    darkTheme: true,
    width: 1920,
    height: 1080,
  });
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
  }

  ipcMainHandle("getAllCustomers", async () => {
    const customers = await CustomerController.getAllCustomers();

    return customers;
  });

  ipcMainOn("sendFrameAction", (payload) => {
    switch (payload) {
      case "CLOSE":
        mainWindow.close();
        break;
      case "MAXIMIZE":
        mainWindow.maximize();
        break;
      case "MINIMIZE":
        mainWindow.minimize();
        break;
    }
  });

  handleCloseEvents(mainWindow);
});

function handleCloseEvents(mainWindow: BrowserWindow) {
  let willClose = false;

  mainWindow.on("close", (e) => {
    if (willClose) {
      return;
    }
    e.preventDefault();
    mainWindow.hide();
    if (app.dock) {
      app.dock.hide();
    }
  });

  app.on("before-quit", () => {
    willClose = true;
  });

  mainWindow.on("show", () => {
    willClose = false;
  });
}
