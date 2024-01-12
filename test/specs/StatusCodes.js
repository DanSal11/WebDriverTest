//5

const ElementClick = require('../../components/methodClick');

describe('Status Codes', function() {
    it('click to enter in Status Codes automation test', async function() {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.StatusCodes();
    })

    it('check the 200 button', async function() {
        const bt200 = await $('//*[@id="content"]/div/ul/li[1]/a');
        const bt200Text = await bt200.getText();
        const text = await $('//*[@id="content"]/div/p');
        const btText = await text.getText();

        await bt200.click();

        if(btText.trim() === "This page returned a" + bt200Text + "status code. For a definition and common list of HTTP status codes, go here") {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        }
        else {
            console.log(btText);
            console.log("NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
            console.log("This page returned a " + bt200Text + " status code. For a definition and common list of HTTP status codes, go here");
        }

        await browser.pause(3000);
        await ElementClick.HereBackHome();
    })
    


})