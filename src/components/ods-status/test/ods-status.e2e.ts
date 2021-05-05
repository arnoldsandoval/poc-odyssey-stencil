import { newE2EPage } from '@stencil/core/testing';

describe('ods-status', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-status></ods-status>');

    const element = await page.find('ods-status');
    expect(element).toHaveClass('hydrated');
  });
});
