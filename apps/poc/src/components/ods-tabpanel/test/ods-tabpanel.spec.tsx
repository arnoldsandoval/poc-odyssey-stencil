import { newSpecPage } from '@stencil/core/testing';
import { OdsTabpanel } from '../ods-tabpanel';

describe('ods-tabpanel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsTabpanel],
      html: `<ods-tabpanel></ods-tabpanel>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-tabpanel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-tabpanel>
    `);
  });
});
