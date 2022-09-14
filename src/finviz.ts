import * as puppeteer from "puppeteer-core";
import { delay } from "./delay";

const DefaultDelaySecs = process.env.NODE_ENV === 'production' ? 300 : 10;
const DarkGreyColor = '#22252b';
const MarginTop = 150;

export const showSpyMap = async (page: puppeteer.Page, delaySecs: number = DefaultDelaySecs): Promise<void> => {
    await page.goto('https://finviz.com/map.ashx');
    await page.$eval('body', (e) => {
        e.classList.add('is-map-expanded');
    })
    await delay(delaySecs);
}

const showPage = async (page: puppeteer.Page, url: string): Promise<void> => {
    await page.goto(url);
    await page.$eval('table.header', (e) => {
        e.remove();
    })
    await page.$eval('table.navbar', (e) => {
        e.remove();
    })
    await page.$eval('div.content > div > div > div > div:nth-child(2)', (e, { marginTop }) => {
        const style = e.getAttribute('style') as string;
        e.setAttribute('style', `${style};
            transform: scale(1.5);
            margin-top: ${marginTop}px;
            margin-bottom: ${marginTop}px;
            background-color: transparent
        `)
    }, { marginTop: MarginTop })
    await page.$eval('body', (e, { color }) => {
        const style = e.getAttribute('style') as string;
        e.setAttribute('style', `${style}; background-color: ${color}`)
    }, { color: DarkGreyColor })
}

export const showFutures = async (page: puppeteer.Page, delaySecs: number = DefaultDelaySecs): Promise<void> => {
    await showPage(page, 'https://finviz.com/futures.ashx');
    await delay(delaySecs);
}

export const showCrypto = async (page: puppeteer.Page, delaySecs: number = DefaultDelaySecs): Promise<void> => {
    await showPage(page, 'https://finviz.com/crypto.ashx');
    await delay(delaySecs);
}