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

const stack = new Stack()
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(300)
console.log(stack.peek());
