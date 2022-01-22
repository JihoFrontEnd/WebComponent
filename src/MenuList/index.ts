import { injectStyle } from '@/utils';
import style from './style.scss';

interface MenuItem {
  id?: number;
  name: string;
  href: string;
}

class MenuList extends HTMLElement {
  status: boolean = true;
  #menuData: Array<MenuItem> = [
    {
      name: 'Menu A',
      href: '/alpha'
    },
    {
      name: 'Menu B',
      href: '/beta'
    },
    {
      name: 'Menu C',
      href: '/charly'
    },
  ];

  constructor() {
    super();
    const shadowDOM = this.attachShadow({ mode: 'open' });
    const menuList = document.createElement('ul');

    this.#menuData.forEach((data) => {
      const item = document.createElement('li');
      const anchor = document.createElement('a');

      anchor.href = data.href;
      anchor.innerText = data.name;

      item.appendChild(anchor);
      menuList.appendChild(item);
    });

    injectStyle(shadowDOM, style);
    shadowDOM.appendChild(menuList);
  }

  connectedCallback() {
    this.toggle();
  }

  toggle() {
    this.status = !this.status;
    this.toggleAttribute('data-toggle');
  }
}

function useMenuList() {
  customElements.define('menu-list', MenuList);
}

export { MenuList, useMenuList };
