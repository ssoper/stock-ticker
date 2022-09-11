import * as puppeteer from "puppeteer";
import { delay } from "./delay";

const DefaultDelaySecs = 3;

export const showSpyMap = async (page: puppeteer.Page, delaySecs?: number): Promise<void> => {
    await page.goto('https://finviz.com/map.ashx');
    await page.$eval('body', (e) => {
        e.classList.add('is-map-expanded');
    })
    await delay(delaySecs || DefaultDelaySecs);
}

export const showFutures = async (page: puppeteer.Page, delaySecs?: number): Promise<void> => {
    await page.goto('https://finviz.com/futures.ashx');
    await page.$eval('table.header', (e) => {
        e.remove();
    })
    await delay(delaySecs || DefaultDelaySecs);
}

export const showCrypto = async (page: puppeteer.Page, delaySecs?: number): Promise<void> => {
    await page.goto('https://finviz.com/crypto.ashx');
    await page.$eval('table.header', (e) => {
        e.remove();
    })
    await delay(delaySecs || DefaultDelaySecs);
}