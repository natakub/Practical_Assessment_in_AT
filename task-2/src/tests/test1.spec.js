const { expect } = require("@wdio/globals");
const { pages } = require("../po");

describe("@test1 - Login form with empty credentials", () => {
  before(async () => {
    await pages("login").open();
  });

  it("an appropriate error message should appear when trying to log in without credentials", async () => {
    const loginForm = pages("login").loginForm;
    //1. Type any credentials.
    await loginForm.setValuesForInputs("test_username", "test_password");
    //2. Clear the inputs.
    await loginForm.clearInputs(
      loginForm.input("username"),
      loginForm.input("password")
    );

    await loginForm.loginBtn.waitAndClick();

    //3. Check the error messages: 3.1 Username is required.
    await expect(loginForm.errorMessage).toHaveText(
      "Epic sadface: Username is required"
    );
  });
});
