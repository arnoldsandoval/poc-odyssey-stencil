import { newSpecPage } from '@stencil/core/testing';
import { OdsModal } from '../ods-modal';

describe('ods-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsModal],
      html: `<ods-modal></ods-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-modal>
    `);
  });
});
