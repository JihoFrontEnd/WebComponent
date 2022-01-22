import { createNode } from '../utils';
import template from './template.html';

class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: 'open' });
    shadowDOM.appendChild(createNode(template));
  }
}

function useMyComponent() {
  customElements.define('my-component', MyComponent);
}

export { useMyComponent };
