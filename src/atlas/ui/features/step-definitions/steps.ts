import { Then, When } from '@wdio/cucumber-framework';
import SerpPage from '../pageobjects/serpPage/serp.page';
import SignInPage from '../pageobjects/signIn.page';


const pages = {
    signIn: SignInPage,
    serp: SerpPage
};

When(/^I am on the "(\w+)" page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with "(.+)" and "(.+)"$/, async (email, password) => {
    await SignInPage.signIn(email, password);
    await SerpPage.waitLoading();
});

When(/^I see loaded "([^"]+)" page$/, async (page)=>{
    await pages[page].waitLoading();
});

When(/^I see loaded "([^"]+)" component on "([^"]+)" page$/, async (component, page)=>{
    await pages[page].components[component].waitLoading();
});

When(/^I click on "([^"]+)" on "([^"]+)" component on "([^"]+)" page$/,  async (control, component, page) =>{
    await pages[page].components[component].controls[control].click();
});

When(/^I click on "([^"]+)" on "([^"]+)" page$/, async (control, page) =>{
    await pages[page].scrollToControl(pages[page].controls[control]);
    await pages[page].controls[control].click();
});

Then(/^Current page is "(\d+)"$/, async (pageNumber) =>{
    const pageNumberInUrl = Number((await browser.getUrl()).split('page=')[1].split('&')[0]);
    expect(pageNumberInUrl+1).toBe(pageNumber);
});

Then(/^I should see "([^"]+)" with text "([^"]+)" on "([^"]+)" component on "([^"]+)" page$/, async (control, expectedText, component, page) =>{
    expect(await pages[page].components[component].controls[control].getText()).toBe(expectedText);
});
Then(/^I should see that "([^"]+)" is enabled in "([^"]+)" component on "([^"]+)" page$/,async ( control, component, page) =>{
    expect(await pages[page].components[component].controls[control]).toBeEnabled();
});
