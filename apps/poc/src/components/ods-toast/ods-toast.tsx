import { Component, Prop, Element, Event, EventEmitter, Host, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ods-toast',
  styleUrl: 'ods-toast.scss',
  shadow: true,
})
export class Toast {
  @Element() element: HTMLElement;

  /**
   * Describes the visual variant the toast banner.
   */
  @Prop() variant: 'info' | 'success' | 'caution' | 'danger';

  /**
   * Title message displayed on the toast
   */
  @Prop() heading?: string;

  /**
   * Body text displayed beaneath the toast title
   */
  @Prop() body: string;

  /**
   * Displays the banner
   */
  @Prop({ mutable: true }) active?: boolean = true;

  /**
   * Event: Fired when the ods-toast is dismissed.
   */
   @Event({
    eventName: 'dismissed'
  }) toastDismissed: EventEmitter<boolean>;

  handleDismiss = () => {
    this.toastDismissed.emit();
    this.active = false;

    this.element.remove()
  }

  handleAnimationEnd = (event: AnimationEvent) => {
    const { animationName } = event;
    if (animationName === "ods-toast-out") {
      this.handleDismiss()
    }
  }

  render() {
    const componentClass = classNames('ods-toast', {
      [`is-ods-toast-${this.variant}`]: this.variant,
      'is-toast-dismissed': !this.active
    })

    const getIcon = (variant) => {
      const icons = {
        info: 'get-info',
        success: 'complete',
        caution: 'caution',
        danger: 'error'
      }

      return icons[variant]
    }

    return (
      <Host>
        {this.active && (
          <aside role="status" class={componentClass} on-animationend={this.handleAnimationEnd}>
            <span class="ods-toast--icon">
              <ods-icon type={getIcon(this.variant)}></ods-icon>
            </span>
            {this.heading && <h1 class="ods-toast--title">{this.heading}</h1>}
            <p class="ods-toast--body">{this.body}</p>
            <span class="ods-toast--dismiss">
              <ods-button aria-label="Dismiss status message" onClick={this.handleDismiss} variant="dismiss"></ods-button>
            </span>
          </aside>
        )}
      </Host>
    );
  }
}
