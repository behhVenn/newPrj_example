import Page from './page';


class InitialPage extends Page {

    private get title() {
        return $('h1[data-testid=landing-page-hero-title]');
    }

    private get vehicleSearchButton(){
        return $('button(data-testid=lp-vehicle-search-button)');
    }

    public async waitLoading() {
        await this.title.waitForDisplayed();
        await (await this.vehicleSearchButton).waitForDisplayed();
    }
}

export default new InitialPage();
