import { newE2EPage } from '@stencil/core/testing';

describe('ods-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-modal></ods-modal>');

    const element = await page.find('ods-modal');
    expect(element).toHaveClass('hydrated');
  });
});
