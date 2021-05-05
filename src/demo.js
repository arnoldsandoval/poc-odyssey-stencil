class DocsExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .docs-example {
          position: relative;
          padding: 3.42857rem;
          margin-bottom: 3.42857rem;
          border: 1px solid var(--border-color-display,#d7d7dc);
          border-radius: 6px;
        }
      </style>
      <div class="docs-example">
        <slot><slot>
      </div>
    `
  }
}
customElements.define('docs-example', DocsExample);

class DocsExampleSegment extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .docs-example--segment {
          margin: 1rem auto;
        }

      </style>
      <div class="docs-example--segment">
        <slot><slot>
      </div>
    `
  }
}
customElements.define('docs-example-segment', DocsExampleSegment);

class DocsArticle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .docs-article {
          padding: 6.85714rem 0;
        }

        .emoji {
          font-family: apple color emoji,segoe ui emoji,noto color emoji,android emoji,emojisymbols,emojione mozilla,twemoji mozilla,segoe ui symbol;
          margin-right: 6px;
        }

        .article-title {
          margin-bottom: 3.42857rem;
        }

        .list {
          border: 5px solid #F5F5F6;
          padding:  1.42857rem 3.42857rem;
          display: inline-block;
        }
        .list li {
          display: inline-block;
          margin-right: 1.42857rem;
        }
        .list li:last-child {
          margin-right: 0;
        }
      </style>
      <div class="docs-article">
        <div class="article-title">
          <ods-title level="2">
            ${this.emoji}
            ${this.title}
          </ods-title>
        </div>
        <slot><slot>
      </div>
    `
  }

  get emoji() {
    const attr = this.getAttribute('emoji');
    return attr ? `<span role="presentation" class="emoji">${this.getAttribute('emoji')}</span>` : '';
  }

  get title() {
    const attr = this.getAttribute('section-title');
    return attr ? this.getAttribute('section-title') : '';
  }
}

customElements.define('docs-article', DocsArticle);


class DocsNotes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .docs-notes {
          padding: 3.42857rem;
          background: #F5F5F6;
          font-size: 1.14rem;

          margin-bottom: 3.4rem;
        }

        .emoji {
          font-family: apple color emoji,segoe ui emoji,noto color emoji,android emoji,emojisymbols,emojione mozilla,twemoji mozilla,segoe ui symbol;
          margin-right: 6px;
        }

      </style>
      <div class="docs-notes">
        <ods-title level="3">Notes</ods-title>
        <slot><slot>
      </div>
    `
  }
}

customElements.define('quick-notes', DocsNotes);
