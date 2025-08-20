import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ods-banner',
  styleUrl: 'ods-banner.scss',
  shadow: true,
})

export class OdsBanner {
  /**
   * Describes the visual variant for the banner.
   */
    @Prop() variant: 'info' | 'danger' | 'caution' = 'info';

  /**
   * The title of the banner.
   */
    @Prop() headline?: string;

  /**
   * The human-readable content displayed along side the headline within the banner.
   */
   @Prop() content: string;

  /**
   * Displays a dismiss button for the banner
   */
    @Prop() dismissable?: boolean;


  /**
   * Displays the banner
   */
   @Prop({ mutable: true }) active?: boolean = true;

  /**
   * Event: Fired when the ods-banner is dismissed by the user.
   */
    @Event({
      eventName: 'dismissed'
    }) bannerDismissed: EventEmitter<boolean>;

    handleDismiss = () => {
      this.bannerDismissed.emit();
      this.active = false;
    }

    render() {
    const componentClass = classNames('ods-banner', {
      [`is-ods-banner-${this.variant}`]: this.variant,
      'is-ods-banner-hidden': !this.active,
      'is-ods-banner-dismissable': this.dismissable
    })

    const getIcon = (variant) => {
      const icons = {
        info: 'get-info',
        danger: 'error',
        caution: 'caution'
      }

      return icons[variant]
    };

    return (
      <aside class={componentClass}>
        <span class="ods-banner--icon">
          <ods-icon type={getIcon(this.variant)}></ods-icon>
        </span>
        <h1 class="ods-banner--title">{this.headline}</h1>
        <p class="ods-banner--content"><slot name="content"></slot></p>
        <section class="ods-banner--actions">
          <slot name="actions"></slot>
        </section>
        {this.dismissable && (
          <span class="ods-banner--dismiss">
            <ods-button onClick={this.handleDismiss} variant="dismiss"></ods-button>
          </span>
        )}
      </aside>
    );
  }

}
