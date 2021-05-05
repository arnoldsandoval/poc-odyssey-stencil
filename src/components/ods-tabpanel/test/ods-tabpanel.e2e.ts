import { newE2EPage } from '@stencil/core/testing';

describe('ods-tabpanel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-tabpanel></ods-tabpanel>');

    const element = await page.find('ods-tabpanel');
    expect(element).toHaveClass('hydrated');
  });
});
