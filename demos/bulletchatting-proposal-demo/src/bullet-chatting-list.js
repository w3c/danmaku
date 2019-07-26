import { PolymerElement, html } from '@polymer/polymer';

class DemoCustomElements extends PolymerElement {
    constructor() {
        super();

        this.addEventListener('bulletchattingplaystate-changed', () => {
            if (this.bulletchattingplaystate === 'paused') {
                const items = this.querySelectorAll('bullet-chatting');
                for (let i = 0; i < items.length; i++) {
                    items[i].bulletchattingplaystate = 'paused';
                }
            } else if (this.bulletchattingplaystate === 'running') {
                const items = this.querySelectorAll('bullet-chatting');
                for (let i = 0; i < items.length; i++) {
                    items[i].bulletchattingplaystate = 'running';
                }
            }
        });
    }

    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                    position: relative;
                }
            </style>
            <slot></slot>
        `;
    }

    static get properties () {
        return {
            bulletchattingplaystate: {
                type: String,
                notify: true,
                value: 'running',
            },
            bulletchattingduration: {
                type: Number,
                value: 4000,
            },
            bulletchattingdelay: {
                type: Number,
                value: 0,
            },
            allowOverlap: {
                type: Boolean,
                value: false,
            },
            area: {
                type: Number,
                value: 100,
            },
        };
    }
}

customElements.define('bullet-chatting-list', DemoCustomElements);