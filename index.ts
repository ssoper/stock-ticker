import * as puppeteer from "puppeteer";
import { logger } from './src/logger';

const delay = (seconds: number): Promise<void> => {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, seconds*1000);
    })
}

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

    await page.goto('https://finviz.com/map.ashx');
    await page.$eval('body', (e) => {
        e.classList.add('is-map-expanded');
    })
    await delay(5);

    await page.goto('https://finviz.com/futures.ashx');
    await page.$eval('table.header', (e) => {
        e.remove();
    })
    await delay(5);

})();
