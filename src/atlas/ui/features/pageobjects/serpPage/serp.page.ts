import { assert } from 'console';
import Page from '../page';
import CompareHeader from './compareHeader';
import DRIHeader from './driHeader';

class SerpPage extends Page {
    private serpItem = '//div[@data-testid="srp-results-grid"]/div[@data-testid="srp-vehicle-card"]';
    private compareButtonInSerpItemCSS = 'button[data-testid=vehicle-card-compare-icon]';
    private personalRessultsCount = 'h4[data-testid=search-results-count]';
    private srpPageNextButton = '#srp-page-next-btn';

    async addToCompare(itemIndex = 0, itemsCount = 0) {
        const specialItem = $(`${this.serpItem}[${itemIndex}]`);
        await specialItem.scrollIntoView();
        await specialItem.$(this.compareButtonInSerpItemCSS).click();
        await CompareHeader.waitLoading();
    }
    get components() {
        return { 'DRI Header': DRIHeader,
            'Compare Lightbox': CompareHeader };
    }

    get controls() {
        return { 'Right pagination element': $(this.srpPageNextButton)};
    }

    async waitLoading() {
        await $(this.personalRessultsCount).waitForDisplayed();
    }

    async scrollToControl(control) {
        await control.scrollIntoView();
    }
}

export default new SerpPage();
