//3

const ElementClick = require('../../components/methodClick');
// const Locators = require('../locator/locators_v1');

describe('Form Authentification', function() {
    it('click on Form Authentification', async function() {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.ClickFrmAuth();
    })

    it('should be able to do a Form authentification', async function() {
        const username = await $('//*[@id="username"]');
        const password = await $('//*[@id="password"]');

        // const username = await $(Locators.username);
        // const password = await $(Locators.password);

        await username.setValue('tomsmith');
        await password.setValue('SuperSecretPassword!');
        await browser.pause(3000);

        await ElementClick.Login();
              
        // await browser.pause(3000);

    })

    it('should be able to logout', async function() {
        await ElementClick.Logout();
        await browser.pause(3000);
    })
})