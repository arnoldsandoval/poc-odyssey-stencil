import { newSpecPage } from '@stencil/core/testing';
import { OdsInputText } from '../ods-input-text';

describe('ods-input-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsInputText],
      html: `<ods-input-text></ods-input-text>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-input-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-input-text>
    `);
  });
});
