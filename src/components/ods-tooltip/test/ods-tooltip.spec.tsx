import { newSpecPage } from '@stencil/core/testing';
import { OdsTooltip } from '../ods-tooltip';

describe('ods-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OdsTooltip],
      html: `<ods-tooltip></ods-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <ods-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ods-tooltip>
    `);
  });
});
