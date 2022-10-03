import * as puppeteer from "puppeteer-core";
import { executablePath } from "./chrome";

const ChromiumPort = process.env.CHROMIUM_PORT ?? "9123";

export const getBrowser = async (): Promise<puppeteer.Browser> => {
  if (process.env.NODE_ENV === "production") {
    const browserURL = `http://127.0.0.1:${ChromiumPort}`;
    return await puppeteer.connect({ browserURL });
  } else {
    const options = {
      headless: false,
      defaultViewport: null,
      executablePath: executablePath(),
    };

    return await puppeteer.launch(options);
  }
};
