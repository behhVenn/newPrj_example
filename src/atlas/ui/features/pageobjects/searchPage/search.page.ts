import Page from '../page';
import DRIHeader from './driHeader';

class SearchPage extends Page {
    public get components() {
        return { 'DRI Header': DRIHeader };
    }

    public get controls() {
        return { 'Right pagination element': this.srpPageNextButton };
    }

    private get personalRessultsCount() {
        return $('h4[data-testid=search-results-count]');
    }

    private get srpPageNextButton() {
        return $('#srp-page-next-btn');
    }

    public async waitLoading() {
        await this.personalRessultsCount.waitForDisplayed();
    }

    public async scrollToControl(control) {
        await control.scrollIntoView();
    }
}

export default new SearchPage();
