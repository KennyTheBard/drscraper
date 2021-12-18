import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
      timeout: 60000
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  await browser.close();
})();