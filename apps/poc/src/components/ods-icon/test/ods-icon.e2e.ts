import { newE2EPage } from '@stencil/core/testing';

describe('ods-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-icon></ods-icon>');

    const element = await page.find('ods-icon');
    expect(element).toHaveClass('hydrated');
  });
});
