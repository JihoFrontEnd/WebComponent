import { useCherryLogo } from "@/CherryLogo";
import { HamBurger, useHamBurger } from "@/HamBurger";
import { MenuList, useMenuList } from "@/MenuList";

import { createNode, injectStyle } from "@/utils";
import template from './template.html'
import style from './style.scss';

class NavigationBar extends HTMLElement {
  constructor() {
    super();
    injectStyle(this, style);
    this.appendChild(createNode(template));
  }

  connectedCallback() {
    this.#resizeHandler();
    window.addEventListener('resize', this.#resizeHandler.bind(this));
    this.#hamburger.addEventListener('click', this.#hamburgerToggleHandler.bind(this));
  }
  
  disconnectedCallback() {
    window.removeEventListener('resize', this.#resizeHandler);
    this.#hamburger.addEventListener('click', this.#hamburgerToggleHandler);
  }

  #resizeHandler() {
    if (window.innerWidth > 900) {
      if (this.#hamburger.status) this.#hamburger.toggle();
      if (!this.#menu.status) this.#menu.toggle();
    } else {
      if (this.#hamburger.status && !this.#menu.status) this.#menu.toggle();
      if (!this.#hamburger.status && this.#menu.status) this.#menu.toggle();
    }
  }

  #hamburgerToggleHandler() {
    this.#hamburger.toggle();
    this.#menu.toggle();
  }

  get #hamburger() {
    return this.querySelector('ham-burger') as HamBurger;
  }

  get #menu() {
    return this.querySelector('menu-list') as MenuList;
  }

}

function useNavigationBar() {
  useCherryLogo();
  useHamBurger();
  useMenuList();
  customElements.define('navigation-bar', NavigationBar);
}

export { useNavigationBar };
