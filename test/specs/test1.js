// describe('eMag.ro', () => {

//     it('should log', async () => {

//         await browser.url('http://emag.ro');
//         await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
//         //! acest test ne va da valoarea pass sau fail la titlul pagini
        
//     })
//     //! tip* greseste ceva din titlu pentru a observa eroarea.

//     it('should select TV, Audio-Video, Gaming... button ', async () => {
//         const linkTvPage = await $('//*[@id="auxiliary"]/div/div/ul[2]/li[2]/a'); 
//         await expect(linkTvPage).toBeDisplayed();
//         //! incearca sa strici clasa sa vezi daca testul pica asteptarile
//         await linkTvPage.click(); // Home Page | class
//     }); 
    
//     it('should contain a back to home button ', async () => {
//         const homePage = await $('//*[@id="masthead"]/div/div/div[1]/a/img'); 
//         await expect(homePage).toBeDisplayed();
//         //! incearca sa strici clasa sa vezi daca testul pica asteptarile
//         await homePage.click(); // Home Page | class
//     });

//     it('should contain content, title page', async () => {
//         const geniusTitle = await $('[title="Genius"]')
//         const geniusButton = await $('//*[@id="auxiliary"]/div/div/ul[2]/li[1]/a');
//         await geniusButton.click(); //Genius page  | XPath
//     });
    
//     it('should have a fully functional search bar', async () => {
//         const searchBox = await $('#searchboxTrigger'); //id
//         const searchButton = await $('.searchbox-submit-button'); // class

//         await searchBox.setValue('casti apple');
//         //! setam o valoare [setValue();] care va fi introdusa in bara de cautare
//         await searchButton.click();

//         await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
//      })
// })


describe('LinkedIn', () => {
    it('deschide pagina login', async() => {
        await browser.url('https://www.linkedin.com/');
    })

    it('logare', async() => {
        const emailbox = await $('//*[@id="session_key"]');
        const passbox = await $('//*[@id="session_password"]');
        const logbt = await $('//*[@id="main-content"]/section[1]/div/div/form/div[2]/button');

        await emailbox.setValue('salistean.d3@gmail.com');
        await passbox.setValue('!0258823733KoL12');

        await logbt.click();

        //verificare
        //await expect(browser).toHaveTitle('https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit');
        const myprofile = await $('//*[@id="ember17"]');
        await expect(myprofile).toBeDisplayed();
    })
})


