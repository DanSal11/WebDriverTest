//4

const ElementClick = require('../../components/methodClick');

describe('Dynamic Controls', function() {
    it('click to enter in Dynamic Controls automation test', async function() {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.btDynamicControls();
    })

    it('click the Enable button', async function() {
        await ElementClick.btEnableOrDisable();
        const message = await $('//*[@id="message"]');

        await browser.pause(7000);
        const btText = await message.getText();
        //console.log(btText);

        if(btText == "It's enabled!") {
            console.log(btText);
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
    })

    it('click the Disable button', async function() {
        await ElementClick.btEnableOrDisable();
        const message = await $('//*[@id="message"]');

        await browser.pause(7000);
        const btText = await message.getText();
        //console.log(btText);

        if(btText == "It's disabled!") {
            console.log(btText);
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
    })


    it('click the Remove button', async function() {
        await ElementClick.BTaddORrem();
        const message = await $('//*[@id="message"]');

        await browser.pause(7000);
        const btText = await message.getText();
        //console.log(btText);

        if(btText == "It's gone!") {
            console.log(btText);
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
    })

    it('click the Add button', async function() {
        await ElementClick.BTaddORrem();
        const message = await $('//*[@id="message"]');

        await browser.pause(7000);
        const btText = await message.getText();
        //console.log(btText);

        if(btText == "It's back!") {
            console.log(btText);
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
    })

})