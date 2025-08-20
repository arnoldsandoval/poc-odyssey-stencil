import { newSpecPage } from '@stencil/core/testing';
import { OdsLink } from '../ods-link';

describe('ods-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsLink],
      html: `<ods-link></ods-link>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-link>
    `);
  });
});
