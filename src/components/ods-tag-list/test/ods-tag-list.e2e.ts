import { newE2EPage } from '@stencil/core/testing';

describe('ods-tag-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-tag-list></ods-tag-list>');

    const element = await page.find('ods-tag-list');
    expect(element).toHaveClass('hydrated');
  });
});
