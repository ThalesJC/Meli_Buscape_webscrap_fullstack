import express from 'express';
import routes from './routes';
// import puppeteer from 'puppeteer';

const app = express();

app.use(express.json());
app.use(routes);

export default app;




// server.get('/meli', async (_req, res) => {
//     const URL = 'https://lista.mercadolivre.com.br/geladeira#D[A:geladeira]';
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto(URL);
//     // await page.screenshot({path: 'google.png'}); // Tira um screenshot da página;
//     let productsMeli = {};
//     const product_links = await page.$$eval(".ui-search-result__image > a", el => el.map(item => item.href));

//     for(const link of product_links) {
//         await page.goto(link);
//         await page.waitForSelector(".ui-pdp-title");

//         const img = await page.$eval(".ui-pdp-gallery__figure > img", el => el.src);
//         const title = await page.$eval(".ui-pdp-title", el => el.innerText);
//         const price = await page.$eval(".andes-money-amount__fraction", el => el.innerText);

//         productsMeli = {
//             img,
//             title,
//             price,
//             link,
//         };
//     };

//     await browser.close();

//     res.json(productsMeli)
// });

// server.get('/buscape', async (_req, res) => {
//     const URL = 'https://www.buscape.com.br/search?q=geladeira';
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto(URL);
//     let productsBP = {};
//     const product_links = await page.$$eval(".SearchCard_ProductCard_Inner__7JhKb", el => el.map(item => item.href));

//     for(const link of product_links) {
//         await page.goto(link);
//         await page.waitForSelector(".swiper-wrapper > div > img");

//         const img = await page.$eval(".swiper-wrapper > div > img", el => el.src);
//         const title = await page.$eval("#__next > div.ProductPageBody_ContentBody__De_1M > div:nth-child(2) > div > div > div.col-lg-8 > div:nth-child(1) > div > div:nth-child(1) > div > div > h1", el => el.innerText);
//         const price = await page.$eval(".Price_ValueContainer__1U9ia > strong", el => el.innerText);

//         productsBP = {
//             img,
//             title,
//             price,
//             link,
//         };
//     };

//     await browser.close();

//     res.json(productsBP)
// });
