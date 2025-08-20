import { Component, Prop, Element, h } from '@stencil/core';
import { HTMLStencilElement } from "@stencil/core/internal";
import classNames from 'classnames';

@Component({
  tag: 'ods-infobox',
  styleUrl: 'ods-infobox.scss',
  shadow: true,
})

export class OdsInfobox {
  /**
   * The component's element
   */
  @Element() element: HTMLStencilElement;

  /**
   * Describes the visual variant for the infobox.
   */
  @Prop() variant: 'info' | 'danger' | 'caution' | 'success' = 'info';

  /**
   * The title of the infobox.
   */
  @Prop() headline?: string;

  /**
   * The human-readable content displayed along side the headline within the infobox.
   */
   @Prop() content: string;

   render() {
    const componentClass = classNames('ods-infobox', {
      [`is-ods-infobox-${this.variant}`]: this.variant
    })

    const hasSlot = (name: string) => !!this.element.querySelector( `[slot="${name}"]`);

    const getIcon = (variant) => {
      const icons = {
        info: 'get-info',
        danger: 'error',
        caution: 'caution',
        success: 'complete',
      }

      return icons[variant]
    };

    return (
      <aside role="alert" class={componentClass}>
        <span class="ods-infobox--icon">
          <ods-icon type={getIcon(this.variant)}></ods-icon>
        </span>
        <h1 class="ods-infobox--title">{this.headline}</h1>
        <section class="ods-infobox--content">
          <slot name="content"></slot>
        </section>
        {hasSlot('actions') && (
          <section class="ods-infobox--actions">
            <slot name="actions"></slot>
          </section>
        )}
      </aside>
    );
  }

}
