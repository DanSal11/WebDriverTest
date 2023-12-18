const ElementClick = require('../../components/methodClick');
const Locators = require('../../locator/locators_v1');

describe('drag and drop test', function () {
    it('click on Drag and Drop', async function () {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.ClickDragAndDrop();
    });

    it('perform drag and drop with succes', async function () {
        const firstEl = await $(Locators.elementA);
        const secondEl = await $(Locators.elementB);

        console.log('Source Selector:', firstEl);
        console.log('Target Selector:', secondEl);

        await firstEl.scrollIntoView(); // Asigură-te că elementul sursă este vizibil înainte de a încerca să îl tragi

        // Utilizează dragAndDrop din WebdriverIO
        await firstEl.dragAndDrop(secondEl);

        // Alternativ, poți folosi browser.dragAndDrop pentru a trage și plasa între coordonatele (x, y)
        // await browser.dragAndDrop({ fromX: 10, fromY: 10, toX: 100, toY: 100 });

        await browser.pause(2000);
    });
});