const BasePage = require("./base.page");
const { LoginForm } = require("../components");

class LoginPage extends BasePage {
  constructor() {
    super("https://www.saucedemo.com/");
    this.loginForm = new LoginForm();
  }
}

module.exports = LoginPage;
