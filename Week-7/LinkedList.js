const Node = require('./Node');

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  get isEmpty() {
    return this.first === null;
  }

  add(...values) {
    for (const value of values) {
      const node = new Node(value);

      if (this.isEmpty) {
        this.first = node;
        this.last = node;
      } else {
        this.last.next = node;
        this.last = node;
      }
    }
  }

  toString() {
    let str = `Linked List(\t`;
    for (let p = this.first; p != null; p = p.next) {
      str += `${p.value}\t`;
    }
    str += `)`;
    return str;
  }
}

module.exports = LinkedList;
