const DOMNodeCollection = require("./dom_node_collection");

window.$l = function(arg) {
  if (arg instanceof HTMLElement ) {
    arg = [arg];
  }
  return new DOMNodeCollection(document.querySelectorAll(arg));
};
