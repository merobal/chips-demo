import { ChipsDemoPage } from './app.po';

describe('chips-demo App', () => {
  let page: ChipsDemoPage;

  beforeEach(() => {
    page = new ChipsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
