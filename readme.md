## Information on Cypress:

### 1. What is Cypress ?

- Cypress is a next generation front end testing tool build for the modern web application (React, Angular, Vue, etc.).
- Use Javascript to write automated tests.
- Built on Node.js and comes with packages as an npm module.
- Makes our tests very simple when we compared with other tools.
- Having different architecture when compared with Selenium. It's not Java based technology.
- We can write faster, easier and more reliable tests using Cypress.

### 2. Selenium Vs Cypress Architectures

- Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network (Browser Driver).
- But Cypress engine directly operates inside the browser. In other words, it is the browser that is executing your test code.
- This enables Cypress to listen and modify the browser behavior at run time by manipulating DOM and altering Network requests and responses on teh fly.

### 3. Cypress Ecosystem

Cypress ia an Open source tool and consists of:

- Test Runner (Open Source Component. Locally installed) helps you set up and start writing tests.
- Dashboard Service (Recording tests): The Dashboard provides you insight into what happened when you tests run.

### 4. Why use Cypress ?

- Cypress does not use Selenium.
- Focuses on doing end-to-end testing well.
- Cypress works on any front-end framework or website.
- Tests are only written in Javascript.
- Cypress is all in one: all-in-one testing framework, assertion library, with mocking and stubbing, all without Selenium.
- Cypress is for developers (for unit and integration testing) and QA engineers (functional testing or API testing).
- Cypress runs much, much faster.

### 5. Features

- Time travel
- Real time reloads: automatically reload whenever you make changes to your tests.
- Spies, stubs, and clocks
- Consistent results
- Debug ability
- Automatic waiting
- Network traffic control
- Screenshots and videos

### 6. Limitations

- Support Limited set of browsers - Chrome, Canary , electron
- Page Object Model is not supported
- Tough to read data from files
- Third Party Reporting integration is limited, we have to use build-in reporting mechanism (Dashboard Service)

## Installing Cypress

```console
npm install cypress --save-dev
```

- Cypress uses Mocha as default, so when install Cypress, Mocha is also installed automatically.

## Test Runner

- Launch Test Runner in Cypress to run test cases with command

```console
./node_modules/.bin/cypress open
```

Note: by default, Cypress supports to run test in Electron browser.

This will launch a new window, and create a new folder called "cypress" in your root folder.

## Cypress Folder Structure

1. fixtures: to maintain Test Data files. They can be in different formats (xml, json, html, excel, etc.)

2. e2e/integration: where test cases are located. Cypress will try to look for test cases in this folder.

3. plugins: contain Events Listeners.

4. screenshot: automatically capture a snapshot of browser when test fails.

5. supports: store reusable scripts (Ex: Custom Commands)

6. videos: automatically record videos when run test cases.

- node_modules

- cypress.config.js

- package.json: contains info of the project and all packages used in the project.

Note: When installing Cypress, a new folder called Cypress with structural files and folders are automatically created. Every folder has his/her own role. Therefore, whenever creating new file or folder, it is important to locate it in proper place.

## Locating Elements

- By default, Cypress only supports CSS locator.

- Syntax to identify one or more DOM elements by selector

```console
cy.get(selector)
```

Some examples:

```console
.class
#id
[attribute=value]
.class[attribute=value]
```

- Cypress doesn't support X-path. In order to use it, you can use a package called "cypress-xpath"

- In Chrome browser, ChroPath extension can be used to get the css selector

- Css Locator of any element can be captured in Test Runner Window => Selector Playground from Test Runner.

## Page Object Model

- POM is a design pattern where Page objects and Automation test scripts are separated from each other.

- Advantages: reusability, maintainability

## Cypress Command Line & Dashboard Service

### 1. Cypress Command

- Run in headless mode.

1. Run all tests:

```console
./node_modules/.bin/cypress run
```

2. Run a specific test file

```console
./node_modules/.bin/cypress run --spec "cypress\e2e\firstTest.cy.js"
```

3. Run test on browser

```console
./node_modules/.bin/cypress run --headed
```

4. Run a specific test file on a specific browser

```console
./node_modules/.bin/cypress run --browser chrome --spec "cypress\e2e\firstTest.cy.js"
```

### 2. Dashboard Service

- Cypress provides Dashboard Service as a Cloud-based Service

- Launch Test Runner -> Log In into Dashboard

- Setup Project to Record -> set projectId and key

- Run the command from local machine

```console
./node_modules/.bin/cypress run --record --key e9953c67-e412-4aaa-bb42-4538ec153041
```

This Record will capture the result, the video, and the screenshot where the test fails. These info will be recorded in cloud service.

## Continuous Integration with Jenkins

### 1. From local machine

- download jenkins & run "java --jar jenkins.war" to launch the browser

- create new item

- Choose custom workspace & execute windows batch command

- Start Run Build

## Reference:

[Cypress Official Document](https://www.cypress.io/)
[Cypress Page Object Model](https://www.browserstack.com/guide/cypress-page-object-model)
[SDET - Tutorial](https://www.youtube.com/c/pavanoltraining)
