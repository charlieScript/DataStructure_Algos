class node {
  public value: any;
  public next: any;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  public head: any;
  public size: any;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  append(value: any) {
    const newNode = new node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      // if the last node has a next value of null terminate
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size = this.size + 1;
  }

  prepend(value: any): void {
    const newNode = new node(value);
    // IF THE LIST IS EMPTY
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size = this.size + 1;
  }

  insert(value: any, index: number) {
    if (index < 0 || index > this.size) {
      console.log(`index is invalid should be in range of 0 - ${this.size}`);
      return;
    }
    // if the
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new node(value);
      let prev = this.head;
      // loop till you get to index previous node
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
      this.size = this.size + 1;
    }
  }

  removeFrom(index: number) {
    if (index < 0 || index >= this.size) {
      return console.log('invalid index');
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size = this.size - 1;
    return removeNode;
  }

  removeLast() {
    if (this.isEmpty()) {
      return console.log('list is empty');
    }
    if (this.size === 1) {
      this.head = null;
      this.size = 0;
    } else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
      this.size = this.size - 1;
    }
  }

  removeValue(value: number) {
    let removedNode;
    if (this.isEmpty()) {
      return console.log('list is empty');
    }
    // if the value in the beginning of the list
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size = this.size - 1;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size = this.size - 1;
        return value;
      }
      return null;
    }
  }

  removeFirst() {
    if (this.isEmpty()) {
      return console.log('list is empty');
    }
    if (this.size === 1) {
      this.head = null;
      this.size = 0;
    } else {
      let next = this.head.next;
      this.head = next;
      this.size = this.size - 1;
    }
  }

  get(index: number) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    // if index at head
    if (this.isEmpty()) {
      return console.log('list is empty');
    }
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    return prev.value;
  }

  search(value: number) {
    if (this.isEmpty()) {
      return console.log('list is empty');
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  reverse() {
    if (this.isEmpty()) {
      return console.log('list is empty');
    }
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      // traverse this list
      let current = this.head;
      let listValues = '';
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

class LinkedListTail {
  public head: any;
  public tail: any;
  public size: any;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value: number) {
    const newNode = new node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size = this.size + 1;
  }

  append(value: number) {
    const newNode = new node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size = this.size + 1;
  }

  removeFromHead() {
    if (this.isEmpty()) {
      return console.log("list is empty");
    }
    const value = this.head.value;
    this.head = this.head.next
    this.size = this.size - 1;
    return value
  }

  removefromTail() {
    if (this.isEmpty()) {
      return console.log('list is empty');
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next
      }
      prev.next = null;
      this.tail = prev
    }
    this.size = this.size - 1;
  }

  test() {}

  pr() {}

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      // traverse this list
      let current = this.head;
      let listValues = '';
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

// const list = new LinkedListTail();
// list.append(1);
// list.append(2);
// list.removefromTail()
// // list.print()
// console.log(list);

export default LinkedListTail
