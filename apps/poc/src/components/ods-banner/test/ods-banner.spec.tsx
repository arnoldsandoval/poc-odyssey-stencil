import { newSpecPage } from '@stencil/core/testing';
import { OdsBanner } from '../ods-banner';

describe('ods-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsBanner],
      html: `<ods-banner></ods-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-banner>
    `);
  });
});
