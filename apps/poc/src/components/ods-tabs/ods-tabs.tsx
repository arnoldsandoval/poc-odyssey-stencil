import { Component, Element, State, Prop, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'ods-tabs',
  styleUrl: 'ods-tabs.scss',
  shadow: true,
})
export class OdsTabs {
  @Element() element: HTMLElement;
  @State() activeTabIndex: number = 0;

  /**
   * A label which describes the contents of the modal to assistive devices.
   */
  //  @Prop() id: string;

  /**
   * A label which describes the contents of the modal to assistive devices.
   */
   @Prop() ariaLabel: string;

  /**
   * A label which describes the contents of the modal to assistive devices.
   */
   @Prop() initialTabpanelIndex: number;

  tabpanels = () => Array.from(this.element.querySelectorAll<HTMLStencilElement>('ods-tabpanel'))

  componentWillLoad () {
    if (this.initialTabpanelIndex) {
      this.activeTabIndex = this.initialTabpanelIndex
    }

    this.updateTabpanels()
  }

  handleTabChange(tabIndex) {
    this.activeTabIndex = tabIndex;
    this.updateTabpanels()
  }

  updateTabpanels () {
    this.tabpanels()
      .forEach((tabpanel, index) => {
        if (index === this.activeTabIndex) {
          tabpanel.hidden = false
        } else {
          tabpanel.hidden = true
        }
      })
  }

  renderTab = (panel, index) => {
    // const id = `${this.id}-tab-${index}`;
    const isSelected = index === this.activeTabIndex;
    const tabindex = isSelected ? '0' : '-1';

    return (
      <button
        // id={id}
        role="tab"
        tabindex={tabindex}
        // aria-controls={`${id}-tabpanel`}
        class="ods-tabs--tab"
        aria-selected={isSelected.toString()}
        onClick={() => this.handleTabChange(index)}
      >
        {panel.getAttribute('tab-label')}
      </button>
    )
  }

  render() {
    const tabpanels = this.tabpanels()

    return (
      <div
        // id={this.id}
        class="ods-tabs"
        aria-label={this.ariaLabel}
      >
        <div role="tablist" aria-label="label" class="ods-tabs--tablist">
          {tabpanels.map((panel, index) => this.renderTab(panel, index))}
        </div>
        <slot></slot>
      </div>
    );
  }

}
