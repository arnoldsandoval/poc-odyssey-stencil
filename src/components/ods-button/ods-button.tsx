import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

/**
 * Issues
 *  - font-family should be removed from css for button, it should be inherited from `html`
 */
@Component({
  tag: 'ods-button',
  styleUrl: 'ods-button.scss',
  shadow: true,
})
export class OdsButton {

  /**
   * Describes the visual variant for the button.
   */
   @Prop() variant: 'primary' | 'secondary' | 'danger' | 'overlay' | 'clear' | 'dismiss';

   /**
    * Disables the button
    */
   @Prop() disabled: boolean;

   render() {
     const componentClass = classNames('ods-button', {
       [`is-ods-button-${this.variant}`]: this.variant
     })

     return (
       <button class={componentClass} disabled={this.disabled}>
         <slot></slot>
         {this.variant === 'dismiss' && <ods-icon type="close"></ods-icon>}
       </button>
     );
   }
}
