import { logger } from './src/logger';
import {
    showSpyMap,
    showFutures,
    showCrypto
} from './src/finviz';
import { getBrowser } from './src/browser';
import { Browser } from 'puppeteer-core';

// verify that you can run scripts from start script in LXGE session
// for local dev, simplify code
// for production, use connection
// add command line args for chrome in production

(async () => {
    process.on('SIGINT', async () => {
        logger.info('Aborted')
        await browser.close();
        process.exit();
    })

    let browser: Browser

    try {
        browser = await getBrowser();
        const page = await browser.newPage();

        while (true) {
            await showSpyMap(page);
            await showFutures(page);
            await showCrypto(page);
        }
    } catch (error: any) {
        logger.error(error)
    }
})();
