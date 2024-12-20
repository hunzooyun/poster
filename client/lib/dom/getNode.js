/**
 *
 * @param {string | Element} node
 * @param {Document | string} context
 * @returns {HTMLElement}
 */

export function getNode(node, context = document) {
  // if(isString(context)) context = document.querySelector(context);

  // context가 document가 아니라면 querySelector를 돌아줘.
  // if()
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

getNode(".first");

function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);
  return context.querySelectorAll(node);
}
