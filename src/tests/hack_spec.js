import puppeteer from "puppeteer";
import httpServer from "http-server";
import percySnapshot from "@percy/puppeteer";
import { platform as platformFn } from "os";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { expect } from "expect";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const platform = platformFn();
// We need to change the args passed to puppeteer based on the platform they're using
const puppeteerArgs = /^win/.test(platform) ? [] : ["--single-process"];
const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `http://localhost:${PORT}`;

describe("Visual Interaction Test", function () {
  this.timeout(6000);
  let page;
  let server;
  let browser;

  before(async () => {
    server = httpServer.createServer({ root: `${__dirname}/../../dist` });
    server.listen(PORT);

    browser = await puppeteer.launch({
      headless: true,
      timeout: 10000,
      args: puppeteerArgs,
    });
  });

  after(() => {
    server.close();
  });

  beforeEach(async function () {
    page = await browser.newPage();
    await page.goto(TEST_URL);
    await page.evaluate(() => localStorage.clear());
  });

  afterEach(function () {
    page.close();
  });

  it("Loads the app", async function () {
    let mainContainer = await page.$(".card");
    expect(mainContainer).toBeDefined();

    await percySnapshot(page, "app-loaded-" + this.test.fullTitle());
  });

  it("Toggles the 'See More' section", async function () {
    const seeMoreBtn = await page.$(".see-more-btn");
    expect(seeMoreBtn).toBeDefined();

    await seeMoreBtn.click();

    const details = await page.waitForSelector(".details-column");
    expect(details).toBeDefined();

    const additionalDetails = await page.$(".additional-details");
    expect(additionalDetails).toBeDefined();

    await percySnapshot(page, "Profile card - See More clicked");
  });

  it("Toggles the 'See Less' section back to hidden state", async function () {
    const seeMoreBtn = await page.$(".see-more-btn");
    expect(seeMoreBtn).toBeDefined();

    await seeMoreBtn.click();

    const details = await page.waitForSelector(".details-column");
    expect(details).toBeDefined();

    await seeMoreBtn.click();

    const additionalDetails = await page.$(".additional-details");
    expect(additionalDetails).toBeNull();

    expect(additionalDetails).toBeNull();

    await percySnapshot(page, "Profile card - See Less");
  });

  it("Verifies links section after 'See More'", async function () {
    await page.click(".see-more-btn");

    const linksSection = await page.waitForSelector(".links-section");
    expect(linksSection).toBeDefined();

    const linksCount = await page.$$eval(
      ".links-section a",
      (links) => links.length
    );
    expect(linksCount).toEqual(3);

    await percySnapshot(page, "Profile card - Links section visible");
  });

  it("Hides details section when toggled again", async function () {
    await page.click(".see-more-btn");
  
    await page.waitForSelector(".details-column");
  
    await page.click(".see-more-btn");
  
    //TODO: Need to check in docs for better way for waiting or delay
    await new Promise(resolve => setTimeout(resolve, 2000))
  
    const details = await page.$(".details-column"); 
    expect(details).toBeNull(); 
  
    await percySnapshot(page, "Profile card - See Less clicked");
  });  
});
