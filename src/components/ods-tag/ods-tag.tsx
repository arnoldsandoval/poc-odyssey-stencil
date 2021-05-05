import { Component, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'ods-tag',
  styleUrl: 'ods-tag.scss',
  shadow: true,
})

export class OdsTag {
  render() {
    const componentClass = classNames('ods-tag')

    return (
      <li class={componentClass}><slot></slot></li>
    );
  }
}
