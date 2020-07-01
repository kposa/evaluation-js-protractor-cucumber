const { Given, When, Then, setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const { browser, protractor} = require('protractor');
const { expect } = require('chai');
let EC = protractor.ExpectedConditions;
let bootstrapFormsPage = require('../pages/bootstrapFormsPage');

Then('title of the browser should be {string}', async function (expectedTitle) {
    expect(await browser.getTitle()).to.equal(expectedTitle);
});

Then('The readonly input should not be in the viewport', async function () {
    //console.log(await bootstrapFormsPage.isReadOnlyInputVisible());
    //expect( bootstrapFormsPage.isReadOnlyInputVisible()).to.be.false;
});

When('The readonly input is scrolled into the viewport', function () {
    browser.actions().mouseMove(bootstrapFormsPage.readOnlyInput).perform();
});

Then('The readonly input should be in the viewport', async function () {
    expect(await bootstrapFormsPage.isReadOnlyInputVisible()).to.be.true;
});

Then('The readonly input should be readonly', async function () {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.readOnlyInput, 'readonly')).to.equal('true');
});

Then('The default checkbox should be enabled', async function () {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.defaultCheckbox, 'disabled')).to.be.null;
});

Then('The disabled checkbox should be disabled', async function () {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.disabledCheckbox, 'disabled')).to.equal('true');
});

Then('The default checkbox should be unchecked', async function () {
    expect(await bootstrapFormsPage.isFormElementSelected(bootstrapFormsPage.defaultCheckbox)).to.be.false;
});

When('The default checkbox is clicked on', function () {
    bootstrapFormsPage.defaultCheckbox.click();
});

Then('The default checkbox should be checked', async function () {
    expect(await bootstrapFormsPage.isFormElementSelected(bootstrapFormsPage.defaultCheckbox)).to.be.true;
});

Then('The default radio should be enabled', async function () {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.defaultRadioButton, 'disabled')).to.be.null;
});

Then('The disabled radion should be disabled', async function () {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.disabledRadioButton, 'disabled')).to.equal('true');
});

Then('The default radio should be selected', async function () {
    expect(await bootstrapFormsPage.isFormElementSelected(bootstrapFormsPage.defaultRadioButton)).to.be.true;
});

Then('The second default radio should not be selected', async function () {
    expect(await bootstrapFormsPage.isFormElementSelected(bootstrapFormsPage.secondDefaultRadioButton)).to.be.false;
});

When('The second default radio is clicked on', async function () {
    bootstrapFormsPage.secondDefaultRadioButton.click();
});

Then('The default radio should be not selected', async function () {
    expect(await bootstrapFormsPage.isFormElementSelected(bootstrapFormsPage.defaultRadioButton)).to.be.false;
});

Then('The second default radio should be selected', async function () {
    expect(await bootstrapFormsPage.isFormElementSelected(bootstrapFormsPage.secondDefaultRadioButton)).to.be.true;
});

Then('There should be a button with text {string}', async function (buttonName) {
expect(await bootstrapFormsPage.disabledPrimaryButton(buttonName).isDisplayed());
});

Then('The primary button should be disabled', async function () {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.disabledPrimaryButton('Primary button'), 'disabled')).to.equal('true');
});

When('the page is scrolled down {int} page', function (int) {
    browser.executeScript('window.scrollTo(0, 800);');
});

Then('The active primary link button should not be disabled', async function () {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.activePrimaryLink('Primary link'), 'disabled')).to.be.null;
});

Then('The example select should be visible', async function () {
expect(await bootstrapFormsPage.exampleSelect.isDisplayed()).to.be.true;
});

Then('The example multiple select should be a multiple select', async function () {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.exampleMultiSelect, 'multiple')).to.equal('true');
});

Then('The selected option in example select should be {string}', async function (expectedValue) {
    expect(await bootstrapFormsPage.getAttributeOfElement(bootstrapFormsPage.exampleSelect, 'value')).to.equal(expectedValue);
});

Then('there should not be option like {string} in example select', async function (expectedOption) {
let allOptions = await bootstrapFormsPage.isOptionAvailableInSelect(expectedOption);

});

Then('there should be option like {string} in example select', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('The option {string} is selected in example select', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('Thu number of options in example select should be {int}', function (int) {
    // Then('Thu number of options in example select should be {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});