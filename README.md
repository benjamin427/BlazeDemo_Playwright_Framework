Installation:

Go to nodejs website to download the current version of nodejs to use Playwright and follow the installation steps. To verify that nodejs has been installed, go to your terminal and type the command "node --version" and also type the node package command "npm --version"

Project setup:

Make a directory folder from your terminal, and once you're inside the directory you've created, type "npm install playwright@latest" to start creating your project.

Next you're going to initialize Playwright by typing "npm init playwright" to start the process of creating your project. Then follow the prompts to select the language (select JavaScript); type 'test' for where you want the end-to-end tests, type 'y' to add a github actions workflow in the project, and type 'y' to let playwright install browsers automatically. 

Once you've completed your project setup, type "npx playwright test" so it will execute the test suite. If you have a VSCode alleady installed in your machine, type "code" and it will automatically launch the VSCode window.


Setting up script commands:

In order to create custom script commands you will need to go to the project.json file.

Under the "script" section is where you can create the commands that you will use on your terminal. All of the commands are available for you to select which browser to use for test execution. To select a browser in Playwright, type the command "npm run test:chromium" to run the test execution usingthe chrome browser.

If you choose to use a Firefox browser or WebKit, type "npm run test:firefox" or "npm run test:webkit" to run the test execution using the Firefox browser or Playwright's generic version.




