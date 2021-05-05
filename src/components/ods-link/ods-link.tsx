import { Component, Prop, h } from '@stencil/core';

// https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
@Component({
  tag: 'ods-link',
  styleUrl: 'ods-link.scss',
  shadow: true,
})
export class OdsLink {
  /**
   * The address of the hyperlink
   */
    @Prop() href: string;

  /**
   * Browsing context for the hyperlink navigation
   */
    @Prop() target?: '_self' | '_blank' | '_parent' | '_top';

  /**
   * Whether to download the resource instead of navigating to it, and its filename if so
   */
    @Prop() download?: string;

  /**
   * URLs to ping
   */
   @Prop() ping?: string;

  /**
  * Relationship between the location in the document containing the hyperlink and the destination resource
  */
   @Prop() rel?: string;

  /**
   * Human language of the linked resource
   */
   @Prop() hreflang?: string;

  /**
   * Hint for the type of the referenced resource
   */
   @Prop() type?: string;

  /**
   * Referrer policy for fetches initiated by the element
   */
   @Prop() referrerpolicy?: string;

  /**
   * Defines the context in which the ods-link will be used.
   */
   @Prop() role?: 'role'
  | 'button'
  | 'checkbox'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'option'
  | 'radio'
  | 'switch'
  | 'tab'
  | 'treeitem';

  render() {
    return (
      <a
        href={this.href}
        target={this.target}
        download={this.download}
        // ping={this.ping}
        rel={this.rel}
        hreflang={this.hreflang}
        // type={this.type}
        // referrerpolicy={this.referrerpolicy}
      >
        <slot></slot>
      </a>
    );
  }

}
