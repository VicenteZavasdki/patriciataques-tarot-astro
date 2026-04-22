import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const logs = [];
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => logs.push(`[PAGE ERROR] ${err.message}`));
  page.on('requestfailed', req => logs.push(`[REQUEST FAILED] ${req.url()}`));

  console.log('Navigating to site...');
  await page.goto('https://patriciataques-tarot-astro.github-108.workers.dev', {timeout: 30000, waitUntil: 'networkidle'});

  console.log('\n=== SCROLLING TO #AGENDAR ===');
  await page.locator('#agendar').scrollIntoViewIfNeeded();
  await page.waitForTimeout(5000);

  console.log('\n=== CAL.COM CHECK ===');
  const calScript = await page.evaluate(() => {
    return document.querySelector('script[src*=\"embed.cal.com\"]') !== null;
  });
  console.log(`Cal.com script present: ${calScript}`);

  const calGlobal = await page.evaluate(() => {
    return typeof window.Cal !== 'undefined';
  });
  console.log(`window.Cal exists: ${calGlobal}`);

  console.log('\n=== NETWORK REQUESTS ===');
  const calRequests = await page.evaluate(() => {
    const scripts = document.querySelectorAll('script');
    return Array.from(scripts).map(s => s.src);
  });
  console.log('All scripts:', calRequests);

  console.log('\n=== CAL DIV CONTENT ===');
  const calDiv = await page.locator('[data-cal-link]').first();
  const content = await calDiv.innerHTML();
  console.log('Content:', content.substring(0, 300));

  console.log('\n=== CONSOLE LOGS ===');
  logs.forEach(log => console.log(log));

  await page.screenshot({ path: 'cal-section.png' });
  console.log('\nScreenshot saved to cal-section.png');

  await browser.close();
})();