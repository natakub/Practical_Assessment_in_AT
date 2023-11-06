const { $ } = require("@wdio/globals");
const Page = require("./page");
const { Button } = require("../../controls/button");

class LoginPage extends Page {
  get usernameInput() {
    return;
  }

  get passwordInput() {}

  get submitBtn() {
    return new Button("#login-button");
  }

  async open() {
    await super.open();
  }
}

module.exports = new LoginPage();
