const ElementClick = require('../../components/methodClick');

describe('add or remove elements', function() {

    it('click on element Add/Remove Elements Testing', async function () {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.ClickAddOrRemoveLoc();
    })

    it('click on Add Element Testing', async function () {
        await ElementClick.ClickAddLoc();
    })

    it('click on Delete Testing', async function(){
        await ElementClick.ClickRemLoc();
    })
})