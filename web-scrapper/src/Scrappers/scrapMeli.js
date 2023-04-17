import puppeteer from 'puppeteer';

async function scrapMeli(category) {
    const baseURL = `https://lista.mercadolivre.com.br/${category}#D[A:${category}]`;
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(baseURL);
    // await page.screenshot({path: 'src/screenshots/${baseURL}.png'}); // Tira um screenshot da página;
    let productsMeli = new Set();
    const product_links = await page.$$eval(".ui-search-result__image > a", el => el.map(item => item.href));
    console.log(product_links);

    for(const link of product_links) {
        await page.goto(link);
        await page.waitForSelector(".ui-pdp-title");

        const img = await page.$eval(".ui-pdp-gallery__figure > img", el => el.src);
        const title = await page.$eval(".ui-pdp-title", el => el.innerText);
        console.log(title);
        const price = await page.$eval(".ui-pdp-price__second-line .andes-money-amount__fraction", el => el.innerHTML);

        productsMeli.add({
            store: "Mercado Livre",
            img,
            title,
            category,
            price,
            link,
        });
    };

    await browser.close();

    return productsMeli
}

export default scrapMeli;
