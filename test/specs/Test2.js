const BaseUrl = require('../../data/baseUrl');
const click = require('../../components/methodClick');
const { LOBY_ELEMENT_CLICK } = require('../../locator/locators_v1');

describe('heroku Internet Exploratory', async function () {
    await browser.url('https://the-internet.herokuapp.com/');
    await click.ClickOnRandomLink(LOBY_ELEMENT_CLICK);
    flush();

})