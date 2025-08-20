import { newSpecPage } from '@stencil/core/testing';
import { Icon } from '../ods-icon';

describe('ods-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Icon],
      html: `<ods-icon></ods-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-icon>
    `);
  });
});
