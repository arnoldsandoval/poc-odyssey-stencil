import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'ods-tooltip',
  styleUrl: 'ods-tooltip.scss',
  shadow: true,
})
export class OdsTooltip {
  /**
   * Describes the position of the tooltip relative to the content in the slot.
   */
  @Prop() position: 'top' | 'right' | 'bottom' | 'left' ;

  /**
   * Describes the human-readble text diplayed within the tooltip.
   */
  @Prop() label: string;

  render() {
    const componentClass = classNames('ods-tooltip', {
      [`is-ods-tooltip-${this.position}`]: this.position
    })
    return (
        <span class="has-ods-tooltip">
          <slot></slot>
          <aside id="edit-label" class={componentClass} role="tooltip">
            {this.label}
          </aside>
        </span>
    );
  }
}
