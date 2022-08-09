import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

class SignInPage extends Page {
    // TODO: clarify the reason why such version os not working
    // private root = $('div[data-testid=sign-in-page]');
    // private emailInput  = this.root.$('#signin-email');
    // private password = this.root.$('#signin-password');
    // private sugnInButton = this.root.$('button[data-testid=create-account-flow-sign-in-btn-submit]');

    private get emailInput() {
        return $('#signin-email');
    }

    private get password() {
        return $('#signin-password');
    }
    private get sugnInButton(){
        return $(        'button[data-testid=create-account-flow-sign-in-btn-submit]');
    }

    public async login(username: string, password: string) {
        await this.emailInput.setValue(username);
        await this.password.setValue(password);
        await this.sugnInButton.click();
    }

    public async open() {
        return super.open('sign-in');
    }
}

export default new SignInPage();
