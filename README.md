# Practical Assessment in Automation Testing

Task 2

For this task, please, use the WebDriverIO, Mocha ("describe it" format), Page Object concepts.

Automate the following script: Launch Url https://www.saucedemo.com/

UC -1 - Test Login form with empty credentials:

1. Type any credentials.
2. Clear the inputs.
3. Check the error messages: 3.1 Username is required.

UC -2 - Test Login form with credentials by passing Username:

1. Type any credentials in username.
2. Enter password and Clear the input.
3. Check the error messages: 3.1 Password is required.

UC -3 - Test Login form with credentials by passing Username & Password:

1. Type credentials in username which are under Accepted username are sections.
2. Enter password as secret sauce.
3. Click on Login and validate the title “Swag Labs” in the dashboard.

Provide parallel execution, add logging for tests, and use tagging to parametrize tests suite run. Make sure that all tasks supported by this 3 conditions: 1. UC - 1; 2. UC - 2; 3. UC -3.

Run this command for all tests parallel execution: "npm test"

Run this commands for individual test execution:

- Test1: "npm run test1"
- Test2: "npm run test2"
- Test3: "npm run test3"
