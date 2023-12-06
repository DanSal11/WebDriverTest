
import { LOBY_ELEMENT_CLICK } from '../locator/locators_v1';

class ElementClick {
    FirstElementLink() {
        return findAllDisplayed(LOBY_ELEMENT_CLICK);
    }

    async ClickOnRandomLink() {
        const randomLink = await this.FirstElementLink();
        await randomLink.click();
    }
}

export default new ElementClick();











// netmatch 5 min 
// vineri ora 13:30



