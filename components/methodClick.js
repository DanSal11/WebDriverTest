const Locators = require('../locator/locators_v1');

class ElementClick {

    async ClickElementByLocator() {
        const timeout = 5000; // timeout in milliseconds
        const element = await $(Locators.AB_TEST);
        
        await element.waitForDisplayed({ timeout });

        // Click on the element
        await element.click();

        console.log(`Click on element with locator: ${Locators}`);
    }
}

module.exports = new ElementClick();
