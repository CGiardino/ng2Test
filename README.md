
## Install npm packages
Install the npm packages described in the `package.json`:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
npm run build
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.

Here are the test related scripts:

Open new terminal going to the project folder, keeping the server running
* `npm run webdriver` - to update chromedriver
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)
* `npm test` - run karma with unit tests

## Note
The components and services are written in typescript under app folder

