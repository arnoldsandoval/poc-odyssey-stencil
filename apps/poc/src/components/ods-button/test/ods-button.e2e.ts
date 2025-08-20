import { newE2EPage } from '@stencil/core/testing';

describe('ods-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-button></ods-button>');

    const element = await page.find('ods-button');
    expect(element).toHaveClass('hydrated');
  });
});
