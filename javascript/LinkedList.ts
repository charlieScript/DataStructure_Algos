
// // the element
// class node {
//   public data: number;
//   public next: number | null;
//   // holds data and next 
//   constructor(data: number, next: number | null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class Linked_List {
//   public head: any;
//   public length: number;
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }

//   // add node to beginning of the list
//   unshift(data: number) {
//     // create a new node
//     const newHead = new node(data, this.head);
//     this.length++;
//     this.head = newHead;
//   }

//   // returns the first node
//   getFirst(): number {
//     return this.head;
//   }

//   // returns the last node
//   getLast() {
//     let currentNode = this.head;

//     // loops thru the nodes
//     while (currentNode && currentNode.next) {
//       // set the current node as the next till its null
//       currentNode = currentNode.next;
//     }

//     return currentNode;
//   }

//   // clears list
//   clear() {
//     this.head = null;
//     this.length = 0;
//   }

//   // removes the first node and updates length 
//   shift() {

//     // empty list
//     if (!this.head) {
//       return;
//     }

//     const oldHead = this.head;
//     const newHead = oldHead.next;
//     this.head = newHead;
//     this.length--;
//   }

//   // removes the last node and updates length 
//   pop() {

//     // if the list is empty
//     if (!this.head) {
//       return;
//     }

//     // if the list is one element
//     if (this.length === 0) {
//       return this.shift()
//     }

//     // gets the last node
//     let last = this.getLast()

//     // set the head as the current 
//     let current = this.head

//     // traverse the list till the current node is equal to the last then break
//     while (current.next !== last) {
//       // updates the current node
//       current = current.next
//     }

//     // sets the previous node to the last next value as null
//     current.next = null
//     this.length--
//     return last
//   }

//   // adds at the end of the list
//   push(data: number) {

//     // if the list is empty
//     if (!this.head) {
//       return this.unshift(data)
//     }
//     const last = this.getLast()
//     last.next = new node(data, null)
//     this.length++
//   }

//   // returns a node at a given index
//   get(index: number) {

//     let counter = 0
//     let current = this.head

//     // 
//     while (current < index) {
//       current = current.next
//       counter++
//     }

//     return current
//   }

//   // chenges a value at a node at a given index
//   set(index: number, data: number) {
//     const node = this.get(index)
//     node.data = data
//   }

//   remove(index: number) {
//     const node = this.get(index)
//     const pre = this.get(index - 1)
//     pre.next = pre.next.next
//     this.length--
//     return node
//   }

//   insert(data: number, index: number) {

//     if (index > this.length || index < 0) {
//       return false
//     }

//     if (index === 0) {
//       this.unshift(data)
//     }
//     const prevNode = this.get(index - 1)
//     const nextNode = this.get(index)
//     prevNode.next = new node(data, nextNode)
//     this.length++
//   }
// }

// const List = new Linked_List();

// console.log(List.push(4))
// console.log(List.push(7))
// console.log(List.remove(1))
// console.log(List);





