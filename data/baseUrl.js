async function baseUrlLink(page) {
    const baseUrl = 'https://the-internet.herokuapp.com/';
    await page.goto(baseUrl);
}

module.exports = baseUrlLink();