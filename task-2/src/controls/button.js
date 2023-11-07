class Button {
  constructor(selector) {
    this.selector = selector;
  }

  get element() {
    return $(this.selector);
  }

  waitAndClick = async () => {
    await this.element.waitForExist({
      timeout: 5000,
      timeoutMsg: "Button did not exist",
    });
    await this.element.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Button did not display",
    });
    await this.element.click();
  };
}

module.exports = Button;
