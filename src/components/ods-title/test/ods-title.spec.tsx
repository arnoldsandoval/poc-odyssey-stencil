import { newSpecPage } from '@stencil/core/testing';
import { OdsTitle } from '../ods-title';

describe('ods-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsTitle],
      html: `<ods-title></ods-title>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-title>
    `);
  });
});
