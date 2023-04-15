import puppeteer from 'puppeteer';

async function scrapeBuscape(category){
    const baseURL = `https://www.buscape.com.br/search?q=${category}`;
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(baseURL);
    let productsBP = {};
    const product_links = await page.$$eval(".SearchCard_ProductCard_Inner__7JhKb", el => el.map(item => item.href));

    for(const link of product_links) {
        await page.goto(link);
        await page.waitForSelector(".swiper-wrapper > div > img");

        const img = await page.$eval(".swiper-wrapper > div > img", el => el.src);
        const title = await page.$eval("#__next > div.ProductPageBody_ContentBody__De_1M > div:nth-child(2) > div > div > div.col-lg-8 > div:nth-child(1) > div > div:nth-child(1) > div > div > h1", el => el.innerText);
        const price = await page.$eval(".Price_ValueContainer__1U9ia > strong", el => el.innerText);

        productsBP = {
            store: "Buscape",
            img,
            title,
            price,
            category,
            link,
        };
    };

    await browser.close();

    return productsBP
};

export default scrapeBuscape;
