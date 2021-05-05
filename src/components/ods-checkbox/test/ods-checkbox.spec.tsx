import { newSpecPage } from '@stencil/core/testing';
import { OdsCheckbox } from '../ods-checkbox';

describe('ods-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsCheckbox],
      html: `<ods-checkbox></ods-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-checkbox>
    `);
  });
});
