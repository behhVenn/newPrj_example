import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';


class SignInPage extends Page {
    private  emailInput = '#signin-email';
    private  password = '#signin-password';
    private signInButton = 'button[data-testid=create-account-flow-sign-in-btn-submit]';


    public async signIn(email: string, password: string) {
        await $(this.emailInput).setValue(email);
        await $(this.password).setValue(password);
        await $(this.signInButton).click();
    }

    public async open() {
        return super.open('sign-in');
    }
}

export default new SignInPage();
