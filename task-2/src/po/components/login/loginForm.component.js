const { $ } = require("@wdio/globals");
const BaseComponent = require("../common/base.component");
const Button = require("../../../controls/button");

class LoginFormComponent extends BaseComponent {
  constructor() {
    super("#login_button_container");
  }

  get loginBtn() {
    return new Button("#login-button");
  }

  get errorMessage() {
    return this.rootEl.$("[data-test='error']");
  }

  /**
   *
   * @param  name {"username" | "password"}
   * @returns {*}
   */

  input(name) {
    const selectors = {
      username: "[name='user-name']",
      password: "[name='password']",
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }

  setValuesForInputs = async (username, password) => {
    await this.input("username").setValue(username);
    await this.input("password").setValue(password);
  };
}

module.exports = LoginFormComponent;
