const BaseUrl = async () => {
    const baseUrl = {
        link: "https://the-internet.herokuapp.com/"
    };
    
    await new Promise(resolve => setTimeout(resolve, 1000));
        return baseUrl
    };

module.exports = BaseUrl();