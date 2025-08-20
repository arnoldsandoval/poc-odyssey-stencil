import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ods-radio-group',
  styleUrl: 'ods-radio-group.css',
  shadow: true,
})
export class OdsRadioGroup {
  render() {
    // console.log(this.slots)
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
