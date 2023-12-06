const BaseUrl = require('../../data/baseUrl');
const click = require('../../components/methodClick');
const { LOBY_ELEMENT_CLICK } = require('../../locator/locators_v1');

describe('heroku Internet Exploratory', async function () {
    await BaseUrl.baseUrl();
    
    await click.ClickOnRandomLink(LOBY_ELEMENT_CLICK);
    flush();

})