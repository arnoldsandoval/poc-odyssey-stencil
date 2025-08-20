import { newSpecPage } from '@stencil/core/testing';
import { OdsRadioButton } from '../ods-radio-button';

describe('ods-radio-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsRadioButton],
      html: `<ods-radio-button></ods-radio-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-radio-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-radio-button>
    `);
  });
});
