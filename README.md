
## Install npm packages
Install the npm packages described in the `package.json`:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install (optional, modules already uploaded)
npm run build (optional, src already compiled)
npm start
```

The `npm start` runs the `lite-server` on localhost:3000.

Here are the test related scripts:
* `npm test` - run karma with unit tests

Open a new terminal going to the project folder, keeping the server running
* `npm run webdriver` - to update chromedriver
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Note
The components and services are written in typescript under app folder

