import { HeightWidthPage } from './app.po';

describe('height-width App', () => {
  let page: HeightWidthPage;

  beforeEach(() => {
    page = new HeightWidthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
