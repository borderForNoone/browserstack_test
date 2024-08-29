class FormPage {
    private formButton = $('//android.widget.Button[@content-desc="Forms"]');
    private textField = $('//android.widget.EditText[@content-desc="text-input"]');
    private switchElement = $('//android.widget.Switch[@content-desc="switch"]');
    private dropdown = $('//android.view.ViewGroup[@content-desc="Dropdown"]');;
    private dropdownText = $('//android.widget.EditText[@text]');
    private swipeButton = $('~Swipe');
    private activeButton = $('//android.view.ViewGroup[@content-desc="button-Active"]');

    async openForms() {
        await this.formButton.click();
    }

    async inputText(text: string) {
        await this.textField.setValue(text);
    }

    async getTextFromField() {
        return await this.textField.getText();
    }

    async toggleSwitch() {
        await this.switchElement.click();
    }

    async getSwitchStatus() {
        return await this.switchElement.getText();
    }

    async selectDropdownOption(optionText: string) {
        await this.dropdown.click();
        const option = await $(`android=new UiSelector().text("${optionText}")`);
        await option.click();
    }

    async getDropdownText() {
        return await this.dropdownText.getText();
    }

    async swipeBetweenTabs() {
        await this.swipeButton.click();
        await browser.touchAction([
            { action: 'press', x: 800, y: 600 },
            { action: 'moveTo', x: 100, y: 600 },
            'release'
        ]);
    }

    async getActiveTabText() {
        const activeTab = await $('//android.widget.TextView[@content-desc="WebdriverIO is awesome"]');
        return await activeTab.getText();
    }

    async displayAlertAndAccept() {
        await this.activeButton.click();
        const alertText = await browser.getAlertText();
        await browser.acceptAlert();
        return alertText;
    }
}

export default new FormPage();