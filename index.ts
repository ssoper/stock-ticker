import * as puppeteer from "puppeteer";
import { logger } from './src/logger';
import {
    showSpyMap,
    showFutures,
    showCrypto
} from './src/finviz';

(async () => {
    process.on('SIGINT', async () => {
        logger.info('Aborted')
        await browser.close();
        process.exit();
    })

    const options = {
        headless: false,
        defaultViewport: null
    } as puppeteer.PuppeteerLaunchOptions

    if (process.env.NODE_ENV === 'production') {
        options.args = ['--start-fullscreen'];
    }

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    while (true) {
        await showSpyMap(page);
        await showFutures(page);
        await showCrypto(page);
    }
})();
