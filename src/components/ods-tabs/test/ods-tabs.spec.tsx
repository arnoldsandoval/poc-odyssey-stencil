import { newSpecPage } from '@stencil/core/testing';
import { OdsTabs } from '../ods-tabs';

describe('ods-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsTabs],
      html: `<ods-tabs></ods-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-tabs>
    `);
  });
});
