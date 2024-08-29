exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    updateJob: false,
    specs: [
        './test/specs/**.ts'
    ],
    exclude: [],

    capabilities: [{
        project: "First Webdriverio Android Project",
        build: 'Webdriverio Android',
        name: 'first_test_samsung_galaxy',
        device: 'Samsung Galaxy S10',
        os_version: "10.0",
        app: process.env.BROWSERSTACK_APP_ID,
        'browserstack.debug': true
    }],

    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 20000
    }
};