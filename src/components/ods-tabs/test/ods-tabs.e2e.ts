import { newE2EPage } from '@stencil/core/testing';

describe('ods-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-tabs></ods-tabs>');

    const element = await page.find('ods-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
