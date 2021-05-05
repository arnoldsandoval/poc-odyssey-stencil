import { newSpecPage } from '@stencil/core/testing';
import { OdsRadioGroup } from '../ods-radio-group';

describe('ods-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsRadioGroup],
      html: `<ods-radio-group></ods-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-radio-group>
    `);
  });
});
