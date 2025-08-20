import { newSpecPage } from '@stencil/core/testing';
import { OdsToastPen } from '../ods-toast-pen';

describe('ods-toast-pen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsToastPen],
      html: `<ods-toast-pen></ods-toast-pen>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-toast-pen>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-toast-pen>
    `);
  });
});
