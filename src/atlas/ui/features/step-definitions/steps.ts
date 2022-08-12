import { Then, When } from '@wdio/cucumber-framework';
import SearchPage from '../pageobjects/searchPage/search.page';
import SignInPage from '../pageobjects/signIn.page';


const pages = {
    signIn: SignInPage,
    search: SearchPage
};

When(/^I am on the "(\w+)" page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with "(.+)" and "(.+)"$/, async (email, password) => {
    await SignInPage.signIn(email, password);
    await SearchPage.waitLoading();
});

When(/^I see loaded search results$/, async ()=>{
    await SearchPage.waitLoading();
});

When(/^I click on "([^"]+)" on "([^"]+)" component on "([^"]+)" page$/,  async (control, component, page) =>{
    await pages[page].components[component].controls[control].click();
    await SearchPage.waitLoading();
});

When(/^I click on "([^"]+)" on "([^"]+)" page$/, async (control, page) =>{
    const specialCcontrol = pages[page].controls[control];
    await pages[page].scrollToControl(specialCcontrol);
    await pages[page].controls[control].click();
});

Then(/^current page is "(\d+)"$/, async (pageNumber) =>{
    const pageNumberInUrl = Number((await browser.getUrl()).split('page=')[1].split('&')[0]);
    await expect(pageNumberInUrl+1).toBe(pageNumber);
});
