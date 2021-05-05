import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';

/**
 *  - using a definition list here is great when there are multiple inter-related statuses but can be
 * Issues:
 */

 @Component({
  tag: 'ods-status',
  styleUrl: 'ods-status.scss',
  shadow: true,
})

export class Status {
  /**
   * Describes the visual variant for the Status.
   */
  @Prop() variant: 'neutral' | 'success' | 'caution' | 'danger' ;

  /**
   * A descriptor which appears above the visual status indicator.
   */
   @Prop() label?: string;

  /**
   * The human-readable displayed aloing side the visual status indicator.
   */
   @Prop() value: string;

  /**
   * Visually hides the label.
   */
   @Prop() labelHidden: boolean;

  /**
   * Describes the visual variant (color) used for the status indicator.
   */
   @Prop() role: 'alert' | 'log' | 'marquee' | 'status' | 'timer';


  render() {
    const componentClass = classNames('ods-status', {
      [`is-ods-status-${this.variant}`]: this.variant,
      'is-ods-status-label-hidden': this.labelHidden
    })

    return (
      <dl class={componentClass} role={this.role}>
        <dt class="ods-status--label">
          {this.label}
        </dt>
        <dd class="ods-status--value">
        {this.value}
        </dd>
      </dl>
    );
  }
}
