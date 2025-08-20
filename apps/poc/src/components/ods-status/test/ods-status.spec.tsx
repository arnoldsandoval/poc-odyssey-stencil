import { newSpecPage } from '@stencil/core/testing';
import { Status } from '../ods-status';

describe('ods-status', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Status],
      html: `<ods-status></ods-status>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-status>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-status>
    `);
  });
});
