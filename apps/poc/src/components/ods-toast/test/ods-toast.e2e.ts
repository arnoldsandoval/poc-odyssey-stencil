import { newE2EPage } from '@stencil/core/testing';

describe('ods-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-toast></ods-toast>');

    const element = await page.find('ods-toast');
    expect(element).toHaveClass('hydrated');
  });
});
