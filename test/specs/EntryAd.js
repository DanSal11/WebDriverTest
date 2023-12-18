const ElementClick = require('../../components/methodClick');
// const Locators = require('../locator/locators_v1');

describe('view an ad', function(){
    it('click on EntryAd', async function(){
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.EntryAd();
    })

    it('press the button that activates the ad', async function() {
        await ElementClick.RestartAd();
        const LinkAd = await $('//*[@id="modal"]/div[2]');
        await expect(LinkAd).toBeDisplayed();
    })

    it('close the ad', async function() {
        await ElementClick.CloseAd();
    })
})