// STACK
class Stack {
  private items: number[];
  constructor() {
    this.items = [];
  }

  push(element: number) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

let stack = new Stack()
// stack.push(1)
// stack.push(1)
// stack.push(1)
// stack.push(300)
// console.log(stack.peek());

import LinkedListTail from "./LinkedList";

class LinkedListStack {
  list: LinkedListTail;
  constructor() {
    this.list = new LinkedListTail();
  }
  push(element: number) {
    return this.list.prepend(element);
  }

  pop() {
    return this.list.removeFromHead();
  }

  peek() {
    return this.list.head.value
  }

  isEmpty() {
    return this.list.isEmpty()
  }

  size() {
    return this.list.size();
  }

  print() {
    this.list.print()
  }
}

let stackL = new LinkedListStack()
stackL.push(1)
stackL.push(2)
stackL.push(3)
stackL.pop()
stackL.print();

