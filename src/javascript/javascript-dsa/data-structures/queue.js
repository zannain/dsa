import LinkedList from "./linked-list";

export default class Queue {
  constructor(maxSize) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.length = 0;
  }

  // O(1)
  isEmpty() {
    return this.length === 0;
  }

  hasRoom() {
    return this.length < this.maxSize;
  }

  // O(1)
  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.push(data);
    } else {
      throw new Error("Queue is full!");
    }
  }

  // O(1)
  dequeue() {
    if (!this.hasRoom()) {
      const data = this.queue.pop();
      this.length -= 1;
      return data;
    }
    throw new Error("Queue is empty!");
  }
}
