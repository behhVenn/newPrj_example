import {  When } from '@wdio/cucumber-framework';
import SerpPage from './serp.page';

When(/^I add vehicle with index "(\d+)" to compare$/, async (itemIndex) =>{
    await SerpPage.addToCompare(itemIndex);
});