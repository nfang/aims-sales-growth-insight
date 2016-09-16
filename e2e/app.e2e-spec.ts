import { AimsPage } from './app.po';

describe('aims App', function() {
  let page: AimsPage;

  beforeEach(() => {
    page = new AimsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
