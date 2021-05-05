import { newE2EPage } from '@stencil/core/testing';

describe('ods-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-checkbox></ods-checkbox>');

    const element = await page.find('ods-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
