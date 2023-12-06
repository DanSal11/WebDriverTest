const BaseUrlFunction = require('../../data/baseUrl');
const ElementClick = require('../../components/methodClick');
const Locators = require('../../locator/locators_v1');

describe('heroku Internet Exploratory', function () {
    let baseUrl;
    // let clickOnElement;

    before( async function () {
        baseUrl = await BaseUrlFunction();
        // clickOnElement = new ElementClick();

    });

    it('click on link', async function () {
        console.log(baseUrl);

        const locator = Locators.AB_TEST;
        await browser.url(baseUrl);
        //await ElementClick.
    })

});









//5 teste separate la link uri cu descriere buna si nume fis relevante (nu test 1,2)