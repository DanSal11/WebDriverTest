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


    async ClickAddOrRemoveLoc() {
        const timeout = 5000;
        const btAddorRem = await $(Locators.AddOrRem_TEST);
        await btAddorRem.waitForDisplayed({timeout});
        await btAddorRem.click();
    }
    async ClickAddLoc() {
        const timeout = 5000;
        const btAdd = await $(Locators.Add_TEST);
        await btAdd.waitForDisplayed({timeout});
        await btAdd.click();
    }
    async ClickRemLoc() {
        const timeout = 5000;
        const btRem = await $(Locators.Rem_TEST);
        await btRem.waitForDisplayed({timeout});
        await btRem.click();
    }

    async ClickBrokenImages() {
        const timeout = 5000;
        const btBrIm = await $(Locators.BrokenImages);
        await btBrIm.waitForDisplayed({timeout});
        await btBrIm.click();
    }

    async ClickDragAndDrop() {
        const timeout = 5000;
        const btDrg = await $(Locators.DragAndDrop);
        await btDrg.waitForDisplayed({timeout});
        await btDrg.click();
    }

    async EntryAd() {
        const timeout = 5000;
        const btEntryAd = await $(Locators.EntryAd);
        await btEntryAd.waitForDisplayed({timeout});
        await btEntryAd.click();
    }

    async RestartAd() {
        const timeout = 5000;
        const btRestartAd = await $(Locators.RestartAd);
        await btRestartAd.waitForDisplayed({timeout});
        await btRestartAd.click();
    }

    async CloseAd() {
        const timeout = 5000;
        const btCloseAd = await $(Locators.CloseAd);
        await btCloseAd.waitForDisplayed({timeout});
        await btCloseAd.click();
    }

    async ClickFileUpload() {
        const timeout = 5000;
        const btFileUpload = await $(Locators.FileUpload);
        await btFileUpload.waitForDisplayed({timeout});
        await btFileUpload.click();
    }

    async ClickUpload() {
        const timeout = 5000;
        const btUpload = await $(Locators.Upload);
        await btUpload.waitForDisplayed({timeout});
        await btUpload.click();
    }

    async ClickBasicAuth() {
        const timeout = 5000;
        const btBasicAuth = await $(Locators.BasicAuth);
        await btBasicAuth.waitForDisplayed({timeout});
        await btBasicAuth.click();
    }

    async Dropdown() {
        const timeout = 5000;
        const btDropdown = await $(Locators.Dropdown);
        await btDropdown.waitForDisplayed({timeout});
        await btDropdown.click();
    }

    async btDropdown() {
        const timeout = 5000;
        const btDrpdwn = await $(Locators.btDropDown);
        await btDrpdwn.waitForDisplayed({timeout});
        await btDrpdwn.click();
    }

    async ClickFrmAuth() {
        const timeout = 5000;
        const btFrmAuth = await $(Locators.FormAuthentification);
        await btFrmAuth.waitForDisplayed({timeout});
        await btFrmAuth.click();
    }

    async Login() {
        const timeout = 5000;
        const btLogin = await $(Locators.Login);
        await btLogin.waitForDisplayed({timeout});
        await btLogin.click();
    }

    async Logout() {
        const timeout = 5000;
        const btLogout = await $(Locators.Logout);
        await btLogout.waitForDisplayed({timeout});
        await btLogout.click();
    }

    async btDynamicControls() {
        const timeout = 5000;
        const btDynamicControls = await $(Locators.btDynamicControl);
        await btDynamicControls.waitForDisplayed({timeout});
        await btDynamicControls.click();
    }

    async btEnableOrDisable() {
        const timeout = 5000;
        const btEnableOrDisable = await $(Locators.enableORdisable);
        await btEnableOrDisable.waitForDisplayed({timeout});
        await btEnableOrDisable.click();
    }

    async BTaddORrem() {
        const timeout = 5000;
        const BTaddORrem = await $(Locators.addORrem);
        await BTaddORrem.waitForDisplayed({timeout});
        await BTaddORrem.click();
    }
}

module.exports = new ElementClick();
