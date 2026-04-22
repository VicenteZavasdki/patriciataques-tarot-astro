import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

console.log('Navigating to site...');
await page.goto('https://patriciataques-tarot-astro.github-108.workers.dev', {timeout: 30000});

console.log('\n=== PAGE TITLE ===');
console.log(await page.title());

console.log('\n=== HERO SECTION ===');
const hero = await page.locator('h1').textContent();
console.log(hero);

console.log('\n=== CTA BUTTONS ===');
const ctas = await page.locator('a:has-text(\"Agendar\")').count();
console.log(`Found ${ctas} CTA buttons`);

console.log('\n=== PRICING ===');
const pricingBR = await page.locator('text=R\\$').textContent().catch(() => 'not found');
const pricingEUR = await page.locator('text=€').textContent().catch(() => 'not found');
console.log(`BRL: ${pricingBR}`);
console.log(`EUR: ${pricingEUR}`);

console.log('\n=== CAL.COM SECTION ===');
const calSection = await page.locator('#agendar').isVisible();
console.log(`Cal section visible: ${calSection}`);

const calEmbed = await page.locator('[data-cal-link]').count();
console.log(`Cal embed elements: ${calEmbed}`);

console.log('\n=== FOOTER ===');
const instagram = await page.locator('a[href*=\"instagram\"]').getAttribute('href');
console.log(`Instagram: ${instagram}`);

console.log('\n=== CONSOLE ERRORS ===');
page.on('console', msg => {
  if (msg.type() === 'error') console.log('ERROR:', msg.text());
});

await page.waitForTimeout(2000);

await browser.close();
console.log('\n✅ Done!');
