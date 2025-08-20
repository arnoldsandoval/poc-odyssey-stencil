import { newE2EPage } from '@stencil/core/testing';

describe('ods-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ods-radio-group></ods-radio-group>');

    const element = await page.find('ods-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
