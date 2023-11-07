const { expect } = require("@wdio/globals");
const { pages } = require("../po");

describe("@test2 - Login form with credentials by passing Username", () => {
  before(async () => {
    await pages("login").open();
  });

  it("an appropriate error message should appear when trying to log in without the password", async () => {
    const loginForm = pages("login").loginForm;
    //1.Type any credentials in username.
    //2. Enter password and Clear the input.
    await loginForm.setValuesForInputs("test_username", "secret_sauce");
    await loginForm.clearInputs(loginForm.input("password"));

    await loginForm.loginBtn.waitAndClick();

    //3. Check the error messages: 3.1 Password is required.
    await expect(loginForm.errorMessage).toHaveText(
      "Epic sadface: Password is required"
    );
  });
});
