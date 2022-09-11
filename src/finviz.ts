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

const showPage = async (page: puppeteer.Page, url: string, delaySecs?: number): Promise<void> => {
    await page.goto(url);
    await page.$eval('table.header', (e) => {
        e.remove();
    })
    await page.$eval('table.navbar', (e) => {
        e.remove();
    })

    await delay(delaySecs || DefaultDelaySecs);
}

export const showFutures = async (page: puppeteer.Page, delaySecs?: number): Promise<void> => {
    await showPage(page, 'https://finviz.com/futures.ashx', delaySecs);
}

export const showCrypto = async (page: puppeteer.Page, delaySecs?: number): Promise<void> => {
    await showPage(page, 'https://finviz.com/crypto.ashx', delaySecs);
}