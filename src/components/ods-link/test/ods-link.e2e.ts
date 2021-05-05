import { newE2EPage } from '@stencil/core/testing';

describe('ods-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-link></ods-link>');

    const element = await page.find('ods-link');
    expect(element).toHaveClass('hydrated');
  });
});
