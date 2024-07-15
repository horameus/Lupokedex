import LupoComponent from '@/utils/LupoComponent';
import { html } from 'lit-html';

export default class LupoButton extends LupoComponent {
    constructor() {
        super();
    }

    override render() {
        return html`
            <button>
                <slot></slot>
            </button>
        `;
    }
}

customElements.define('lupo-button', LupoButton);
