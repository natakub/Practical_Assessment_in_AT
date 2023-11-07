const { browser, expect } = require("@wdio/globals");
const { Header } = require("../components");

module.exports = class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  open = async () => {
    await browser.url(this.url);
    await browser.maximizeWindow();
  };

  verifyUrl = async (path) => {
    await $("body").waitForDisplayed();
    const getUrl = await browser.getUrl();

    return await expect(getUrl).toBe(`https://www.saucedemo.com/${path}`);
  };
};
