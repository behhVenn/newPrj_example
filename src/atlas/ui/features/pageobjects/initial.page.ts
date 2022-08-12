import Page from './page';


class InitialPage extends Page {
    private title = 'h1[data-testid=landing-page-hero-title]';
    private vehicleSearchButton = 'button(data-testid=lp-vehicle-search-button)';

    public async waitLoading() {
        await $(this.title).waitForDisplayed();
        await $(this.vehicleSearchButton).waitForDisplayed();
    }
}

export default new InitialPage();
