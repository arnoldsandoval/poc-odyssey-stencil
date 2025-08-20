import { newE2EPage } from '@stencil/core/testing';

describe('ods-input-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-input-text></ods-input-text>');

    const element = await page.find('ods-input-text');
    expect(element).toHaveClass('hydrated');
  });
});
