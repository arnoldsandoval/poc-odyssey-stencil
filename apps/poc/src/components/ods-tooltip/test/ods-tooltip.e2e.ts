import { newE2EPage } from '@stencil/core/testing';

describe('ods-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-tooltip></ods-tooltip>');

    const element = await page.find('ods-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
