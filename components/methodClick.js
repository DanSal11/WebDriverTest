 
class ElementClick {
    async ClickElementByLocator(AB_TEST) {
        const element = await $(AB_TEST);
        await element.click();
        console.log(`Click on element with locator: ${AB_TEST}`);
    }

}

module.exports = ElementClick;