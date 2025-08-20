import { newE2EPage } from '@stencil/core/testing';

describe('ods-infobox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-infobox></ods-infobox>');

    const element = await page.find('ods-infobox');
    expect(element).toHaveClass('hydrated');
  });
});
