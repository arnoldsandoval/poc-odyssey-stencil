import { newSpecPage } from '@stencil/core/testing';
import { OdsTagList } from '../ods-tag-list';

describe('ods-tag-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsTagList],
      html: `<ods-tag-list></ods-tag-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-tag-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-tag-list>
    `);
  });
});
