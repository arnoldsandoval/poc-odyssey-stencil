import { Component, Method, State, h } from '@stencil/core';

@Component({
  tag: 'ods-toast-pen',
  styleUrl: 'ods-toast-pen.scss',
  shadow: true,
})
export class OdsToastPen {
  @State() toasts: any[] = [];

  @Method()
  async addToast (toast) {
    this.toasts = [...this.toasts, toast]
  }

  render() {
    return (
      <div class="ods-toast-pen">
        {this.toasts.map(({ title, variant, content }) => (
          <ods-toast heading={title} variant={variant} body={content}></ods-toast>
        ))}
      </div>
    );
  }
}
