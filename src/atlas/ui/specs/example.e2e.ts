import SignInPage from '../pageobjects/signIn.page';

describe('Search results page', () => {
    beforeEach(async () => {
        await SignInPage.open();
        // TODO: move password to variables or config file
        await SignInPage.login('dmitrii_vagin@epam.com', '123!@#qweQWE');
    });

    it('Check expanded Compare Lightbox with 2 items', async () => {});
});
