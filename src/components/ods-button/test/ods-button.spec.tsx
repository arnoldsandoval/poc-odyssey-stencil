import { newSpecPage } from '@stencil/core/testing';
import { OdsButton } from '../ods-button';

describe('ods-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsButton],
      html: `<ods-button></ods-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-button>
    `);
  });
});
