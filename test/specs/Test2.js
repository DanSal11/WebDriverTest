// const UrlLink= require('../../data/baseUrl'); //! Trebuie sa ne folosim de basUrl
const ElementClick = require('../../components/methodClick');

describe('heroku Internet Exploratory', function () {

    it('click on element tab AB Testing', async function () {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.ClickElementByLocator();

    })
});









//5 teste separate la link uri cu descriere buna si nume fis relevante (nu test 1,2)