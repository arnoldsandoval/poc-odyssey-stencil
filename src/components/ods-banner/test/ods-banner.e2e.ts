import { newE2EPage } from '@stencil/core/testing';

describe('ods-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-banner></ods-banner>');

    const element = await page.find('ods-banner');
    expect(element).toHaveClass('hydrated');
  });
});
