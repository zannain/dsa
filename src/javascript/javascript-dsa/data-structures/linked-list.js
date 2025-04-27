import TreeNode from "./node";

export default class LinkedList {
  // Add to end
  push(val) {
    const newNode = new TreeNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
    return this;
  }

  // Remove from end
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size -= 1;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Remove from beginning
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.size -= 1;
    if (this.size === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // Add to beginning
  unshift(val) {
    const newNode = new TreeNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size += 1;
    return this;
  }

  // Retrieve
  get(index) {
    if (index < 0 || index >= this.size) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.size) return false;
    if (index === this.size) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new TreeNode(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.size += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.size) return undefined;
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.size -= 1;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.size; i += 1) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
