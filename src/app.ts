import { html, render } from 'lit-html';

export default class App extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        render(html` <div><lupo-button>j'adore le jambon</lupo-button></div> `, this);
    }
}

customElements.define('web-app', App);
