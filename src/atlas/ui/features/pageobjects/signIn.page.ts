import { ChainablePromiseElement } from 'webdriverio';
import Page from '../../../../../features/pageobjects/page';


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
    private get signInButton(){
        return $(        'button[data-testid=create-account-flow-sign-in-btn-submit]');
    }

    public async signIn(email: string, password: string) {
        await this.emailInput.setValue(email);
        await this.password.setValue(password);
        await this.signInButton.click();
    }

    public async open() {
        return super.open('sign-in');
    }
}

export default new SignInPage();
