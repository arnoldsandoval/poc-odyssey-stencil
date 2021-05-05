import { newSpecPage } from '@stencil/core/testing';
import { OdsIcon } from '../ods-icon';

describe('ods-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsIcon],
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
