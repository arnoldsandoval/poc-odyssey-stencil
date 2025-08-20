import { Component, h } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'ods-tag-list',
  styleUrl: 'ods-tag-list.scss',
  shadow: true,
})

export class OdsTagList {
  render() {
    const componentClass = classNames('ods-tag-list')

    return (
      <ul class={componentClass}>
        <slot></slot>
      </ul>
    );
  }
}
