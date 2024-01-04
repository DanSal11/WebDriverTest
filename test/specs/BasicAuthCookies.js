const ElementClick = require('../../components/methodClick');

describe('Basic Authentification', function() {
    it('click on Basic Auth', async function() {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.ClickBasicAuth();
    })

    it('it should be able to do a basic authentification', async function() {
        const isPromptOpen = await browser.isAlertOpen(); // checks if prompt is open

        // if (isPromptOpen) {
           // Simulează tastarea numelui de utilizator
            await browser.keys(['a', 'd', 'm', 'i', 'n']);

            // Trece la următorul element (de exemplu, parola)
            await browser.keys(['Tab']);

            // Simulează tastarea parolei
            await browser.keys(['a', 'd', 'm', 'i', 'n']);
        // }
                 
        await browser.pause(7000);
    })
})