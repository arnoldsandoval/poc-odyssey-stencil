import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ods-tabpanel',
  styleUrl: 'ods-tabpanel.scss',
  shadow: true,
})
export class OdsTabpanel {
  /**
   * A label which describes the contents of the modal to assistive devices.
   */
  //  @Prop() id: string;

  /**
   * A label which describes the contents of the modal to assistive devices.
   */
   @Prop({ reflect: true }) hidden: boolean = true;

  render() {
    // const id = this.id;
    const tabindex = this.hidden ? '-1' : '0';

    return (
      <div
        // id={`${id}-tabpanel`}
        aria-labelledby="tab-1"
        class="ods-tabs--tabpanel"
        role="tabpanel"
        tabindex={tabindex}
        hidden={this.hidden}
      >
        <slot></slot>
      </div>
    );
  }

}
