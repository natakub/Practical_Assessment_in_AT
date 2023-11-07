const { expect } = require("@wdio/globals");
const { pages } = require("../po");

describe("@test3 - Test Login form with credentials by passing Username & Password", () => {
  before(async () => {
    await pages("login").open();
  });

  it("should log in with valid credentials", async () => {
    const loginForm = pages("login").loginForm;
    //1. Type credentials in username which are under Accepted username are sections.
    //2. Enter password as secret sauce.
    await loginForm.setValuesForInputs("standard_user", "secret_sauce");
    await loginForm.loginBtn.waitAndClick();
    //3. Click on Login and validate the title “Swag Labs” in the dashboard.
    await pages("products").verifyUrl("inventory.html");
    await expect(pages("products").header.logo).toHaveText("Swag Labs");
  });
});
