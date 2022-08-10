import { Given, When, Then } from 'cucumber';

import signInPage from '../pageobjects/signIn.page';

let { expect } = require('chai');

const pages = {
    signIn: signInPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await signInPage.signIn(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

