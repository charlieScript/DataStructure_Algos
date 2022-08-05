class Queue {
  private items: any;
  front: number;
  back: number;
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(element: number) {
    this.items[this.back] = element
    this.back++
  }

  dequeue() {
    const front = this.items[this.front]
    delete this.items[this.front];
    this.front++
    return front
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front - this.back == 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.dequeue()
// queue.print()

// Circular Queue
class CircularQueue {
  private items: any;
  private capacity: number;
  public currentLength: number;
  front: number;
  back: number;
  constructor(capacity: number) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    // they are not pointing to any position
    this.front = -1;
    this.back = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element: number) {
    if (!this.isFull()) {
      // used to always make sure the index is less than zero
      this.back = (this.back + 1) % this.capacity;
      this.items[this.back] = element;
      this.currentLength = this.currentLength + 1;
      // to make sure front and back pointer are in the same postion in initial operation
      if (this.front === -1) {
        this.front = this.back;
      }
    } else {
      return null
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const item = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front + 1) % this.capacity;
    // once the queue is empty
    if (this.isEmpty()) {
      this.front = -1
      this.back = -1
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front]
    }
    return null
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
    } else {
      let i;
      let str = ''
      for (i = this.front; i !== this.back; i = (i + 1) % this.capacity) {
        str += this.items[i] + ' '
      }
      str += this.items[i]
      console.log(str);
    }
  }
}

const cirq = new CircularQueue(5)
cirq.enqueue(1)
cirq.enqueue(2)
cirq.enqueue(2)
cirq.enqueue(2)
cirq.enqueue(2)

cirq.print()
// console.log(cirq);

