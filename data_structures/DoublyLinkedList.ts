class node {
  value: number;
  prev: any;
  next: any;
  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head: any;
  tail: any;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value: number) {
    const newNode = new node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length = this.length + 1;
  }

  append(value: number) {
    const newNode = new node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length = this.length + 1;
  }

  removeFront() {
    if (this.isEmpty()) {
      return console.log('list is empty');
    } else {
      this.head = this.head.next;
    }
    this.length = this.length - 1;
  }

  removeEnd() {
    if (this.isEmpty()) {
      return console.log('list is empty');
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null
    }
    this.length = this.length - 1;
  }

  printReverse() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      // traverse this list
      let current = this.tail;
      let listValues = '';
      while (current) {
        listValues += `${current.value} `;
        current = current.prev;
      }
      console.log(listValues);
    }
  }

  isEmpty() {
    return this.length === 0;
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

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.removeEnd();
list.print();
list.printReverse()
console.log(list.length);

