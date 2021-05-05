import { newE2EPage } from '@stencil/core/testing';

describe('ods-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-title></ods-title>');

    const element = await page.find('ods-title');
    expect(element).toHaveClass('hydrated');
  });
});
