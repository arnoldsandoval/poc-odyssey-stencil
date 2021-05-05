import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ods-title',
  styleUrl: 'ods-title.scss',
  shadow: true,
})

export class OdsTitle {

  /**
   * Specifies for enabling or disabling of autocomplete in <input> element
   */
   @Prop() level?: '1' | '2' | '3' | '4' | '5' | '6'  ;

  /**
   * Specifies for enabling or disabling of autocomplete in <input> element
   */
   @Prop() visualLevel?: '1' | '2' | '3' | '4' | '5' | '6'  ;

  render() {
    const componentClass = classNames('ods-title', {
      [`is-ods-title-${this.visualLevel}`]: this.visualLevel
    })

    const Tag = `h${this.level}`

    return (
      <Tag class={componentClass}>
        <slot></slot>
      </Tag>
    );
  }

}
