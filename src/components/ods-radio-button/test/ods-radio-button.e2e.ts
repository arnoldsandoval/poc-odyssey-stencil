import { newE2EPage } from '@stencil/core/testing';

describe('ods-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-radio-button></ods-radio-button>');

    const element = await page.find('ods-radio-button');
    expect(element).toHaveClass('hydrated');
  });
});
