const ElementClick = require('../../components/methodClick');
const Locators = require('../../locator/locators_v1');

describe('File Upload', function() {
    it('click on File Upload button', async function() {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.ClickFileUpload();
    })

    it('should be able to upload a file', async function() {
        const btChoseFile = await $(Locators.ChoseFile);

        btChoseFile.setValue("E:\\WebDriverTest\\dog.jpg");
        ElementClick.ClickUpload();
        await browser.pause(2000);
    }) 
})