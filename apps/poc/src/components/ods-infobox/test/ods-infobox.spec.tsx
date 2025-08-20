import { newSpecPage } from '@stencil/core/testing';
import { OdsInfobox } from '../ods-infobox';

describe('ods-infobox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsInfobox],
      html: `<ods-infobox></ods-infobox>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-infobox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-infobox>
    `);
  });
});
