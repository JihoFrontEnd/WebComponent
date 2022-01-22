function createNode(html: string) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.cloneNode(true);
}

function injectStyle(node: HTMLElement | ShadowRoot, style: string) {
  const styleElement = document.createElement('style');
  styleElement.textContent = style;
  node.appendChild(styleElement);
}

export { createNode, injectStyle };
