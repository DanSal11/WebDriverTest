const ElementClick = require('../../components/methodClick');

describe('Dropdown', function() {
    it('click to enter in Dropdown automation test', async function() {
        await browser.url('https://the-internet.herokuapp.com/');
        await ElementClick.Dropdown();
    })

    it('click the Dropdown and show the options', async function() {
        await ElementClick.btDropdown();
        // let OptionDrpDwn = $('//*[@id="dropdown"]/option[1]');
        let OptionDrpDwn1 = $('//*[@id="dropdown"]/option[2]');
        let OptionDrpDwn2 = $('//*[@id="dropdown"]/option[3]');
        let AllOption = [OptionDrpDwn1,OptionDrpDwn2];
        
        // for( var i=0; i<OptionDrpDwn.length; i++) {
        //     console.log(OptionDrpDwn[i].getText());   
        // }

        for( var i=0; i<AllOption.length; i++) {
            console.log(AllOption[i].getText());
            if(AllOption[i].getText() == "Option 1"){
                    AllOption[i].click();
                    break;
                }
            else if(AllOption[i].getText() == "Option 2")
                AllOption[i].click();
        }

        // console.log(OptionDrpDwn1.getText());
        // console.log(OptionDrpDwn2.getText());

        await browser.pause(7000);
    })
})