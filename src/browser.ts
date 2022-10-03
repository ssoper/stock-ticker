import * as puppeteer from "puppeteer-core";
import { executablePath } from "./chrome";

const ChromiumPort = process.env.CHROMIUM_PORT ?? "9123";

export const getBrowser = async (): Promise<puppeteer.Browser> => {
  const options: any = {
    headless: false,
    defaultViewport: null,
  };

  if (process.env.NODE_ENV === "production") {
    options.browserURL = `http://127.0.0.1:${ChromiumPort}`;
    return await puppeteer.connect(options);
  } else {
    options.executablePath = executablePath();
    return await puppeteer.launch(options);
  }
};
