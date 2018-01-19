class DOMNodeCollection {
  constructor(arrOfHTML) {
    this.nodes = arrOfHTML;
  }

  html(html) {
    if (typeof html === "string") {
      this.nodes.forEach((node) => {
        node.innerHTML = html;
      });
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }

  empty () {
    this.html('');
  }


  append (children) {

   if (typeof children === 'object' && !(children instanceof DOMNodeCollection)) {
     children = $(children);
   }

    if (typeof children === "string" ) {
      this.nodes.forEach( (node) => {
        node.innerHTML += children;
      });
    } else if (children instanceof DOMNodeCollection) {
      this.nodes.forEach( (node) => {
        children.each( (childNode) => {
          node.appendChild(childNode.cloneNode(true));
        });
      });
    }
  }

  remove() {
    this.nodes.forEach( (node) => node.parentNode.removeChild(node));
  }

  attr(key, value) {
    if (typeof value === "string") {
      this.forEach( (node) => {
        node.setAttribute(key, value);
      });
    } else {
      return this.node[0].getAttribute(key);
    }
  }




}




module.exports = DOMNodeCollection;
