import { newE2EPage } from '@stencil/core/testing';

describe('ods-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-tag></ods-tag>');

    const element = await page.find('ods-tag');
    expect(element).toHaveClass('hydrated');
  });
});
