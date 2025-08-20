import { Component, Prop, Element, h} from '@stencil/core';
import classNames from 'classnames';
// import { useFocusTrap } from '../../utils/utils'

// Fix little CSS issue for modal https://github.com/okta/odyssey/blob/0cb81d5eae40b09fe958a0651e478fa989ba076c/packages/odyssey/src/scss/components/_modal.scss#L144

@Component({
  tag: 'ods-modal',
  styleUrl: 'ods-modal.scss',
  shadow: true
})

export class OdsModal {
  /**
   * The host element in which the modal is contained.
   */
  @Element() element: HTMLElement;

  /**
   * Determines the display of the modal.
   */
  @Prop({ mutable: true }) active: boolean = false;

  private handleDeactivation = (event) => {
    const hasCloseAttribute = event.target.hasAttribute("data-modal-deactivate")

    if(hasCloseAttribute) {
      this.active = false;
    }
  };

  render() {
    const componentClass = classNames('ods-modal', {
      'is-open': this.active
    });

    const isHidden = this.active ? 'false' : 'true'

    return (
      <div class={componentClass} aria-hidden={isHidden}>
        <div class="ods-modal--overlay" tabindex="-1" data-modal-deactivate onClick={this.handleDeactivation}>
          <div class="ods-modal--dialog" role="dialog" aria-modal={isHidden} aria-labelledby="ods-modal-standard-title">
            <header class="ods-modal--header">
              <span class="ods-modal--dismiss">
                <ods-button variant="dismiss" aria-label="Close modal" data-modal-deactivate onClick={this.handleDeactivation}></ods-button>
              </span>
              <h1 class="ods-modal--title">
                <slot name="title"></slot>
              </h1>
            </header>
            <main class="ods-modal--content">
              <slot name="content"></slot>
            </main>
            <footer class="ods-modal--footer">
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
