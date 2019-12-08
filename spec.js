
describe('test for commbank', () => {

    browser.ignoreSynchronization = true;
    // let btnTellMeMore = element(by.cssContainingText('Tell me more'));
    let btnTravelOverseasInfo = element(by.xpath('//*[@id="products"]/div/div/div[1]/div[8]/div/a/div[2]/div/h3'));
    let subtopic_1 = element(by.xpath('/html/body/div[4]/div[3]/div/div[1]/div/nav/ul/li[1]/a'));
    let subtopic_2 = element(by.xpath('/html/body/div[4]/div[3]/div/div[1]/div/nav/ul/li[2]/a'));
    let subtopic_3 = element(by.xpath('/html/body/div[4]/div[3]/div/div[1]/div/nav/ul/li[3]/a'));
    let subtopic_4 = element(by.xpath('/html/body/div[4]/div[3]/div/div[1]/div/nav/ul/li[4]/a'));

    let btnLogIn = element(by.className('logged-state-button'));
    let userName = element(by.className('rowClientNumber'));
    let pwdField  = element(by.className('rowPassword'));

    let btnLogin2 = element(by.id('btnLogon_field'));

    it('launches the browser', async () => {
        await browser.get('https://www.commbank.com.au');
    })

    it('verifies that user is able to click on Overseas Info link and verifies the sub menus are present', async () => {
        await btnTravelOverseasInfo.click();
        expect(subtopic_1.isPresent()).toBe(true);
        expect(subtopic_2.isPresent()).toBe(true);
        expect(subtopic_3.isPresent()).toBe(true);
        expect(subtopic_4.isPresent()).toBe(true);
    })

    it('clicks on the Log On button and verifies the username and password fields are present', async () => {
        await btnLogIn.click();
        await browser.switchTo().frame(0);
        expect(userName.isPresent()).toBe(true);
        expect(pwdField.isPresent()).toBe(true);
    })

})