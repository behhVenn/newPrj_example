import { Given, When, Then } from '@wdio/cucumber-framework';
import SignInPage from '../pageobjects/signIn.page';


const pages = {
    signIn: SignInPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    await SignInPage.signIn(email, password);
});

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

