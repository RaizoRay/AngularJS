import { AngularJSPage } from './app.po';

describe('angular-js App', () => {
  let page: AngularJSPage;

  beforeEach(() => {
    page = new AngularJSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
