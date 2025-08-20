import { newSpecPage } from '@stencil/core/testing';
import { Toast } from '../ods-toast';

describe('ods-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ods-toast></ods-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-toast>
    `);
  });
});
