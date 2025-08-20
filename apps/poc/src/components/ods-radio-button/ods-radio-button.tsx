import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';
import { id } from '../../utils/decorators';

@Component({
  tag: 'ods-radio-button',
  styleUrl: 'ods-radio-button.scss',
  shadow: true,
})
export class OdsRadioButton {
  @id() componentId: string;

  @Event({
    eventName: 'ods-input',
  })
  eventInput: EventEmitter<any>;

  // The input element ref
  @Prop() element: HTMLInputElement;

  //  HTML Checkbox Attributes: https://html.spec.whatwg.org/multipage/input.html#checkbox-state-(type=checkbox)
  /**
   * Indicates whether the checkbox is checked by default
   */
  @Prop() checked?: boolean;

  /**
   * Disables the input control
   */
  @Prop() disabled?: boolean;

  /**
   * Assigns a name to the input control.
   */
  @Prop() name: string;

  /**
   * Specifies that an input field must be filled out before submitting the form
   */
  @Prop() required?: boolean;

  /**
   * Specifies the intial value for the control.
   */
  @Prop() value: string;

  /**
   * Specifies the the validity of the element value.
   */
  @Prop() invalid: boolean;

  /**
   Indicates that the input elements checked value is neither true nor false.
  */
  @Prop() indeterminate?: boolean;

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement;

    this.eventInput.emit({
      name: input.name,
      checked: input.checked,
    });
  };

  componentWillRender() {
    if (this.indeterminate) {
      this.element.indeterminate = true;
    }
  }

  render() {
    const componentClass = classNames('ods-radio');

    return (
      <Host>
        <input
          ref={el => (this.element = el)}
          onInput={this.handleChange}
          class={componentClass}
          data-invalid={this.invalid}
          type="radio"
          disabled={this.disabled}
          name={this.name}
          checked={this.checked}
          id={this.componentId}
          required={this.required}
          value={this.value}
        />
        <label class="ods-radio--label" htmlFor={this.componentId}>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
