const ElementClick = require('../../components/methodClick');

describe('Basic Authentification', function() {
    it('click on Basic Auth', async function() {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.ClickBasicAuth();
    })

    it('it should be able to do a basic authentification', async function() {
        // await browser.sendAlertText("qavbox");
        // await browser.acceptAlert();
        // expect(await (await $('#Parademo')).getText()).toContain('qavbox');
        // await browser.pause(4000);

        // await browser.waitUntil(async () => {
        //     const popupVisible = await browser.$('#selector-popup').waitForExist();
        //     return popupVisible === true;
        // }, { timeout: 5000, timeoutMsg: 'Pop-up-ul nu s-a afișat în timp util' });

        // // Introdu informațiile de autentificare
        // await browser.setValue('#camp-utilizator', 'utilizator');
        // await browser.setValue('#camp-parola', 'parola');

        const isPromptOpen = await browser.isAlertOpen(); // checks if prompt is open

        if (isPromptOpen) {
            await browser.sendAlertText("BrowserStack"); // types the text BrowserStack          
            await browser.pause(1000);                    
            const promptboxText = await browser.getAlertText();//returns the text of prompt box           
            await console.log("The prompt box text is: ", promptboxText); //logs the text
            //Click on OK in prompt box
            await browser.acceptAlert(); //accepts the prompt box 
        }
             
            
            await browser.pause(7000);
    })
})