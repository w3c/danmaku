import { PolymerElement, html } from '@polymer/polymer';

class DemoCustomElements extends PolymerElement {
    constructor() {
        super();

        this.addEventListener('bulletchattingplaystate-changed', () => {
            if (this.bulletchattingplaystate === 'paused') {
                this.animation && this.animation.pause();
            } else if (this.bulletchattingplaystate === 'running') {
                this.animation && this.animation.play();
            }
        });
    }

    static get properties () {
        return {
            bulletchattingplaystate: {
                type: String,
                notify: true,
            },
            bulletchattingduration: {
                type: Number,
            },
            bulletchattingdelay: {
                type: Number,
            },
            overlapIndex: {
                type: Number,
                value: 0,
            },
            mode: {
                type: String,
                value: 'scroll',
            },
        };
    }

    static get template () {
        return html`
            <style>
                :host {
                    display: inline-block;
                    font-size: 25px;
                    line-height: 1;
                    position: absolute;
                    text-align: center;
                    word-break: keep-all;
                }
            </style>
            <slot></slot>
        `;
    }

    connectedCallback () {
        super.connectedCallback();

        this._inheritProp('bulletchattingplaystate');
        this._inheritProp('bulletchattingduration');
        this._inheritProp('bulletchattingdelay');

        let keyframes = [];
        if (this.mode === 'scroll') {
            this.style.left = '100%';
            keyframes = [{
                transform: `translateX(0px) translateY(0px) translateZ(0px)`
            }, {
                transform: `translateX(-${this.parentElement.offsetWidth + this.offsetWidth}px) translateY(0px) translateZ(0px)`
            }];
        } else if (this.mode === 'reverse') {
            this.style.right = '100%';
            keyframes = [{
                transform: `translateX(0px) translateY(0px) translateZ(0px)`
            }, {
                transform: `translateX(${this.parentElement.offsetWidth + this.offsetWidth}px) translateY(0px) translateZ(0px)`
            }];
        } else {
            this.style.width = '100%';
        }

        this._brothers = [...this.parentElement.querySelectorAll('bullet-chatting')].slice(0, -1).filter((item) => (item.mode === this.mode) && (item.animate.currentTime !== item.bulletchattingduration));
        let index = 0;
        let disabled = false;
        let end = false;
        let styleFlag = 'top';
        if (this.mode === 'bottom') {
            styleFlag = 'bottom';
        }
        while (!end) {
            if (index > 0 && !this.parentElement.allowOverlap) {
                this.remove();
                disabled = true;
                break;
            }
            let boundary = {
                0: 1,
            }; // boundaries of other bulletchatting items
            const overlapBrothers = this._brothers.filter((item) => item.overlapIndex === index);
            overlapBrothers.forEach((ele) => {
                boundary[parseInt(ele.style[styleFlag] || 0)] = 1;
                boundary[parseInt(ele.style[styleFlag] || 0) + ele.getBoundingClientRect().height] = 1;
            });
            if (overlapBrothers.length === 0) {
                this.style[styleFlag] = '0px';
                this.overlapIndex = index;
                end = true;
            } else {
                boundary = Object.keys(boundary).map((item) => parseInt(item)).sort((a, b) => a - b);
                for (let i = 0; i < boundary.length; i++) {
                    if (this._check(boundary[i], index, this.mode)) {
                        this.style[styleFlag] = boundary[i] + 'px';
                        this.overlapIndex = index;
                        end = true;
                        break;
                    }
                }
            }
            index++;
        }
        
        if (!disabled) {
            this.animation = this.animate(keyframes, {
                duration: this.bulletchattingduration,
                delay: this.bulletchattingdelay,
            });
            if (this.bulletchattingplaystate === 'paused') {
                this.animation.pause();
            }
            this.animation.onfinish = () => {
                this.dispatchEvent(new CustomEvent('bulletchattingend'));
                this.finished = true;
                this.remove();
            };
            this.animation.oncancel = () => {
                this.dispatchEvent(new CustomEvent('bulletchattingcannel'));
                this.remove();
            };
    
            this.dispatchEvent(new CustomEvent('bulletchattingstart'));
        }
    }
    
    disconnectedCallback () {
        super.disconnectedCallback();
        if (!this.finished) {
            if (this.animation) {
                this.animation.cancel();
            } else {
                this.dispatchEvent(new CustomEvent('bulletchattingcannel'));
            }
        }
    }

    _inheritProp (name) {
        if (this[name] === undefined && this.parentElement[name] !== undefined) {
            this[name] = this.parentElement[name];
        }
    }

    _check (top, index, mode) {
        const thisBoundingClientRect = this.getBoundingClientRect();
        if (top + thisBoundingClientRect.height > this.parentElement.getBoundingClientRect().height * ((mode === 'scroll' || mode === 'reverse') ? (this.parentElement.area / 100) : 1)) {
            return false;
        }
        const overlapBrothers = this._brothers.filter((item) => item.overlapIndex === index);
        for (let i = 0; i < overlapBrothers.length; i++) {
            if (overlapBrothers[i].animation.currentTime !== overlapBrothers[i].bulletchattingduration) { // hack
                const targetBoundingClientRect = overlapBrothers[i].getBoundingClientRect();
    
                if (mode === 'scroll') {
                    if (targetBoundingClientRect.top < (top + thisBoundingClientRect.bottom)
                        && targetBoundingClientRect.bottom > (top + thisBoundingClientRect.top)) { // pathway coincide
                        if (targetBoundingClientRect.right > thisBoundingClientRect.left + ((this.bulletchattingdelay < 0) ? (this.parentElement.offsetWidth / (this.parentElement.offsetWidth + this.offsetWidth) * this.bulletchattingdelay / this.duration) : 0)) { // crash immediately
                            return false;
                        }
                        if (overlapBrothers[i].bulletchattingduration - overlapBrothers[i].animation.currentTime + overlapBrothers[i].bulletchattingdelay > (this.parentElement.offsetWidth / (this.parentElement.offsetWidth + this.offsetWidth) * this.bulletchattingduration) + this.bulletchattingdelay) { // crash in animation
                            return false;
                        }
                    }
                } else if (mode === 'reverse') {
                    if (targetBoundingClientRect.top < (top + thisBoundingClientRect.bottom)
                        && targetBoundingClientRect.bottom > (top + thisBoundingClientRect.top)) { // pathway coincide
                        if (targetBoundingClientRect.left < thisBoundingClientRect.right + ((this.bulletchattingdelay < 0) ? (this.parentElement.offsetWidth / (this.parentElement.offsetWidth + this.offsetWidth) * this.bulletchattingdelay / this.duration) : 0)) { // crash immediately
                            return false;
                        }
                        if ((overlapBrothers[i].bulletchattingduration - overlapBrothers[i].animation.currentTime + overlapBrothers[i].bulletchattingdelay) > (this.parentElement.offsetWidth / (this.parentElement.offsetWidth + this.offsetWidth) * this.bulletchattingduration) + this.bulletchattingdelay) { // crash in animation
                            return false;
                        }
                    }
                } else if (mode === 'top') {
                    if (targetBoundingClientRect.top < (top + thisBoundingClientRect.bottom)
                        && targetBoundingClientRect.bottom > (top + thisBoundingClientRect.top)) {
                        return false;
                    }
                } else if (mode === 'bottom') {
                    if (targetBoundingClientRect.top < (this.parentElement.getBoundingClientRect().height + thisBoundingClientRect.top - top)
                        && targetBoundingClientRect.bottom > (this.parentElement.getBoundingClientRect().height + thisBoundingClientRect.top - thisBoundingClientRect.height - top)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}

customElements.define('bullet-chatting', DemoCustomElements);