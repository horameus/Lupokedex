import { html, render as renderLitHtml } from 'lit-html';

export default class LupoComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.importSheet(shadowRoot);
        renderLitHtml(this.render(), shadowRoot);
    }

    render() {
        return html``;
    }

    importSheet(shadowRoot: ShadowRoot) {
        const styleSheet = document.createElement('link');
        styleSheet.setAttribute('href', 'style.css');
        styleSheet.setAttribute('rel', 'stylesheet');
        shadowRoot.appendChild(styleSheet);
    }
}
