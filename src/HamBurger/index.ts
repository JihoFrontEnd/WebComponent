import { createNode, injectStyle } from "@/utils";
import style from './style.scss';
import template from './template.html';

class HamBurger extends HTMLElement {
  #shadowRoot: ShadowRoot;
  status: boolean;
  constructor() {
    super();
    this.status = false;
    this.#shadowRoot = this.attachShadow({ mode: 'open' });
    injectStyle(this.#shadowRoot, style);
    this.#shadowRoot.appendChild(createNode(template));
  }
  toggle() {
    this.status = !this.status;
    console.log('toggle', this.status);
    const lines = this.#shadowRoot.querySelectorAll('article');
    lines?.forEach((line, i) => line.toggleAttribute(`data-${i}`));
  }
  hello() {
    console.log('I am still hungry.', this.shadowRoot);
  }
}

function useHamBurger() {
  customElements.define('ham-burger', HamBurger);
}

export { HamBurger, useHamBurger };
