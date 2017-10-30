import { ReaditPage } from './app.po';

describe('readit App', () => {
  let page: ReaditPage;

  beforeEach(() => {
    page = new ReaditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
