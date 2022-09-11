import * as puppeteer from "puppeteer";
import { logger } from './src/logger';
import {
    showSpyMap,
    showFutures
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

    await showSpyMap(page);
    await showFutures(page);

})();
