import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';
import classNames from 'classnames';
import { id } from '../../utils/decorators';

@Component({
  tag: 'ods-input-text',
  styleUrl: 'ods-input-text.scss',
  shadow: true,
})
export class OdsInputText {
  @id() componentId: string;

  /**
   * Specifies for enabling or disabling of autocomplete in <input> element
   */
  @Prop() autocomplete?: 'on' | 'off';

  /**
   * Specifies that <input> element should automatically get focus when the page loads
   */
  //  @Prop() autofocus?: 'autofocus';

   /**
   * Disables the input control
   */
   @Prop() disabled?: boolean;

  /**
   * Specifies the minimum permissible value, this is used in types date, month, week, time and datetime-local only.
   */
   @Prop() min?: string;

  /**
   * Specifies the maximum permissible value, this is used in types date, month, week, time and datetime-local only.
   */
   @Prop() max?: number;

   /**
   * Specifies the minimum amount of characters permissible in the input element.
   */
   @Prop() minlength?: number;

   /**
   * Specifies the maximum amount of characters permissible in the input element.
   */
   @Prop() maxlength?: number;

   /**
   * Assigns a name to the input control.
   */
    @Prop() name: string;

   /**
   * Specifies a short hint that describes the expected value.
   */
    @Prop() placeholder?: string;

   /**
   * Sets the input control value to read-only. This prevents the user from changing the value, however unlike disabled the element can continue to recieve focus.
   */
    @Prop() readonly?: string;

   /**
   * Specifies that an input field must be filled out before submitting the form
   */
    @Prop() required?: boolean;

  /**
   * Specifies the intial value for the control.
   */
   @Prop() value: string;

  /**
   * Assigns a name to the input control.
   */
  @Prop() label: string;

  /**
   * Specifies the type of control.
   */
  @Prop() type: 'text'
  | 'button'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

  /**
  * Specifies the the validity of the element value.
  */
  @Prop() invalid: boolean;

  // @Event() change: EventEmitter;
  // @Event() input: EventEmitter;

  @Event({
    eventName: 'ods-input'
  }) eventInput: EventEmitter<any>;

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement;

    this.eventInput.emit({
      name: input.name,
      value: input.value
    });
  }

  render() {
    const componentClass = classNames('ods-text-input');
    return (
      <Host>
        <label class="ods-label" htmlFor={this.componentId}>{this.label}</label>
        <input
          onInput={this.handleChange}
          class={componentClass}
          type={this.type}
          autocomplete={this.autocomplete}
          disabled={this.disabled}
          min={this.min}
          max={this.max}
          data-invalid={this.invalid}
          minlength={this.minlength}
          maxlength={this.maxlength}
          name={this.name}
          id={this.componentId}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          value={this.value}
        />
      </Host>
    );
  }

}
