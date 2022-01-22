import { createNode } from "@/utils";
import template from './template.html';

class CherryLogo extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: 'open' });
    shadowDOM.appendChild(createNode(template));
    this.addEventListener('click', this.#goToTheHome);
  }
  disconnectedCallBack() {
    this.removeEventListener('click', this.#goToTheHome);
  }
  #goToTheHome() {
    window.location.href = '/';
  }
}

function useCherryLogo() {
  customElements.define('cherry-logo', CherryLogo);
}

export { useCherryLogo };
