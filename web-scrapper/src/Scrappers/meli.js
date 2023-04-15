import puppeteer from 'puppeteer';

async function scrapeMeli(category) {
    const baseURL = `https://lista.mercadolivre.com.br/${category}#D[A:${category}]`;
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(baseURL);
    // await page.screenshot({path: 'src/screenshots/${baseURL}.png'}); // Tira um screenshot da página;
    let productsMeli = {};
    const product_links = await page.$$eval(".ui-search-result__image > a", el => el.map(item => item.href));

    for(const link of product_links) {
        await page.goto(link);
        await page.waitForSelector(".ui-pdp-title");

        const img = await page.$eval(".ui-pdp-gallery__figure > img", el => el.src);
        const title = await page.$eval(".ui-pdp-title", el => el.innerText);
        const price = await page.$eval(".andes-money-amount__fraction", el => el.innerText);

        productsMeli = {
            store: "Mercado Livre",
            img,
            title,
            price,
            category,
            link,
        };
    };

    await browser.close();

    return productsMeli
}

export default scrapeMeli;
