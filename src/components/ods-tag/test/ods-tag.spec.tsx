import { newSpecPage } from '@stencil/core/testing';
import { OdsTag } from '../ods-tag';

describe('ods-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsTag],
      html: `<ods-tag></ods-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-tag>
    `);
  });
});
