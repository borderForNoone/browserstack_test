import FormPage from '../pageobjects/FormPage';

describe('Test Case 1: Input Text in Forms', () => {
    beforeEach(async () => {
        await FormPage.openForms();
    });

    it('should open forms and input text', async () => {
        await FormPage.inputText('Testing123');
        const text = await FormPage.getTextFromField();
        expect(text).toEqual('Testing123');
    });

    it('should toggle the switch', async () => {
        await FormPage.toggleSwitch();
        const switchStatus = await FormPage.getSwitchStatus();
        expect(switchStatus).toEqual('ON');
    });

    it('should select an option from the dropdown', async () => {
        await FormPage.selectDropdownOption('This app is awesome');
        const dropdownText = await FormPage.getDropdownText();
        expect(dropdownText).toEqual('This app is awesome');
    });

    it('should swipe between tabs', async () => {
        await FormPage.swipeBetweenTabs();
        const activeTab = await FormPage.getActiveTabText();
        expect(activeTab).toEqual('WebdriverIO is awesome');
    });

    it('should display alert on button click', async () => {
        const alertText = await FormPage.displayAlertAndAccept();
        expect(alertText).toEqual('This button is active');
    });
});