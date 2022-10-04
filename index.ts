/* eslint @typescript-eslint/no-floating-promises: "off" */
import { logger } from "./src/logger";
import { showSpyMap, showFutures, showCrypto } from "./src/finviz";
import { getBrowser } from "./src/browser";
import { isHeatMapAvailable } from "./src/market";
import { Browser } from "puppeteer-core";

(async () => {
  process.on("SIGINT", (error: Error) => {
    (async () => {
      logger.error(error);
      await browser.close();
      process.exit();
    })();
  });

  let browser: Browser;

  try {
    browser = await getBrowser();
    const page = await browser.newPage();

    while (true) {
      if (isHeatMapAvailable()) {
        await showSpyMap(page);
      }
      await showFutures(page);
      await showCrypto(page);
    }
  } catch (error: any) {
    logger.error(error);
  }
})();
