const locators = {
    AB_TEST: '//*[@id="content"]/ul/li[1]',

    AddOrRem_TEST: '//*[@id="content"]/ul/li[2]/a',
    Add_TEST: '//*[@id="content"]/div/button',
    Rem_TEST: '//*[@id="elements"]/button',

    BrokenImages: '//*[@id="content"]/ul/li[4]/a',

    DragAndDrop: '//*[@id="content"]/ul/li[10]/a',
    elementA: '//*[@id="column-a"]',
    elementB: '//*[@id="column-b"]',

    EntryAd: '//*[@id="content"]/ul/li[15]/a',
    RestartAd: '//*[@id="restart-ad"]',
    // Ad: '//*[@id="modal"]/div[2]',
    CloseAd: '//*[@id="modal"]/div[2]/div[3]/p',

    FileUpload: '//*[@id="content"]/ul/li[18]/a',
    ChoseFile: '//*[@id="file-upload"]',
    Upload: '//*[@id="file-submit"]',

    BasicAuth: '//*[@id="content"]/ul/li[3]/a',

    Dropdown: '//*[@id="content"]/ul/li[11]/a',
    btDropDown: '//*[@id="dropdown"]',

    FormAuthentification: '//*[@id="content"]/ul/li[21]/a',
    Login: '//*[@id="login"]/button/i',
    // username: '//*[@id="username"]',
    // password: '//*[@id="password"]',
    Logout: '//*[@id="content"]/div/a',

    btDynamicControl: '//*[@id="content"]/ul/li[13]/a',
    enableORdisable: '//*[@id="input-example"]/button',
    addORrem: '//*[@id="checkbox-example"]/button',
    
}

module.exports = locators;