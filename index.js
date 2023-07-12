class LinkedList {
  constructor() {
    this.headNode = null;
  }
  append(value) {
    let node = new Node();
    node.value = value;
    node.nextNode = null;
    if (this.headNode === null) {
      this.headNode = node;
    } else {
      this.tail().nextNode = node;
    }
  }
  prepend(value) {
    let node = new Node();
    node.nextNode = this.headNode;
    this.headNode = node;
    node.value = value;
  }
  size() {
    let count = 0;
    let current = this.headNode;
    while (current !== null) {
      count += 1;
      current = current.nextNode;
    }
    return count;
  }
  head() {
    return this.headNode;
  }
  tail() {
    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    let current = this.headNode;
    let i = index;
    if (index > this.size() - 1 || index < 0 || isNaN(index)) {
      return "Error: Please provide an index within the list size.";
    }
    while (i > 0) {
      current = current.nextNode;
      i--;
    }
    return current;
  }
  pop() {
    let lastNode = this.tail();
    let previous = this.headNode;
    while (previous.nextNode !== lastNode) {
      previous = previous.nextNode;
    }
    previous.nextNode = null;
    return this;
  }
  contains(value) {
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return "Error: Value not found in linked list.";
  }
  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.nextNode;
    }
    return "Error: Value not found in linked list.";
  }
  toString() {
    let current = this.headNode;
    let text = "";
    if (this.headNode === null) {
      return null;
    }
    while (current.nextNode !== null) {
      text += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    text += `( ${current.value} ) -> NULL`;
    return text;
  }
  insertAt(value, index) {
    if (index > 0 && index < this.size()) {
      let previous = this.at(index - 1);
      let current = this.at(index);
      let newNode = new Node();
      previous.nextNode = newNode;
      newNode.value = value;
      newNode.nextNode = current;
    } else if (index === 0) {
      this.prepend(value);
    } else if (index === this.size()) {
      this.append(value);
    } else if (index > this.size() || index < 0 || isNaN(index)) {
      return "Error: Please provide an index within the list size.";
    }
    return this;
  }
  removeAt(index) {
    if (index > 0 && index < this.size() - 1) {
      let previous = this.at(index - 1);
      let next = this.at(index + 1);
      previous.nextNode = next;
    } else if (index === 0) {
      let next = this.at(index + 1);
      this.headNode = next;
    } else if (index === this.size() - 1) {
      let previous = this.at(index - 1);
      previous.nextNode = null;
    } else if (index > this.size() - 1 || index < 0 || isNaN(index)) {
      return "Error: Please provide an index within the list size.";
    }
    return this;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

// test methods
let list = new LinkedList();
list.append(100);
list.append(27);
list.prepend(23);
list.prepend(92);
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(1));
console.log(list.toString());
console.log(list.contains(100));
console.log(list.contains(99));
console.log(list.find(23));
console.log(list.contains(96));
console.log(list.pop());
console.log(list.toString());
list.insertAt(1, 0);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
