import { newE2EPage } from '@stencil/core/testing';

describe('ods-toast-pen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-toast-pen></ods-toast-pen>');

    const element = await page.find('ods-toast-pen');
    expect(element).toHaveClass('hydrated');
  });
});
