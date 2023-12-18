const ElementClick = require('../../components/methodClick');



describe('view broken images', function() {
    it('click on BrokenImages', async function(){
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.ClickBrokenImages();
    })

    async function isImageBroken(imageElement){
        return await imageElement.getAttribute('naturalWidth') === '1000';
    }

    it('verify images on the page', async function () {
        const image1 = await $('//*[@id="content"]/div/img[1]');
        const image2 = await $('//*[@id="content"]/div/img[2]');
        const image3 = await $('//*[@id="content"]/div/img[3]');
        const allImages = [image1,image2,image3];

        for (const img of allImages) {
            const isBroken = await isImageBroken(img);
            const src = await img.getAttribute('src');
    
            if(isBroken){
                console.error(`Imaginea cu src '${src}' este "broken" sau nu se afișează corect.`);
            } else {
              console.log(`Imaginea cu src '${src}' este încărcată corect.`);
            }

        }
    });

})


// it('verify a single image on the page', async function () {
//     const imageElement = await $('//*[@id="content"]/div/img[1]');
//     const src = await imageElement.getAttribute('src');
//     const image = new Image();

//     await new Promise((resolve) => {
//         image.onload = resolve;
//         image.onerror = resolve;
//         image.src = src;
//     });

//     if (image.naturalWidth === 0) {
//         console.error(`Imaginea cu src '${src}' este "broken" sau nu se afișează corect.`);
//     } else {
//         console.log(`Imaginea cu src '${src}' este încărcată corect.`);
//     }
// });

// Așteaptă până când toate imaginile sunt încărcate (poate varia în funcție de aplicație)
// await browser.waitUntil(async () => {
//     const images = await $$('//*[@id="content"]/div/img[3]');
//     return images.every(img => img.isDisplayed());
// }, { timeout: 5000, timeoutMsg: 'Unele imagini nu s-au încărcat în timp util.' });