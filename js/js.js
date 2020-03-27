class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class myArray {
  // [this.first, this.first.next, ... , this.last.prev, this.last]
  constructor(...args) {
    this.length = 0;
    args.forEach(arg => {
      this.push(arg);
    })
  }
  push(node) {
    // [this.first, val, val, this.last <- new val]
    node = new Node(node, this.last);
    if (this.length === 0) this.first = node, this.last = node;
    else node.prev = this.last, this.last = node;
  }
  pop() {
    // [this.next, val, val, ] -> this.last
    node = this.last;
    this.last = node.prev;
    return node;
  }
  unshift(node) {
    // [new val -> this.next, val, val, ]
    node = new Node(node, this.last);
    if (this.length === 0) this.first = node, this.last = node;
    else node.next = this.first, this.first = node;
  }
  shift() {
    // this.next <- [, val, val, this.last]
    node = this.first;
    this.first = node.next;
    return node;
  }
}

class Stack {
  constructor(...args) {
    this.length = 0;
    args.forEach(arg => {
      this.push(arg);
    })
  }
  push(node) {
    node = new Node(node, this.next);
    this.next = node;
    this.length++
  }
  pop() {
    let popped = this.next.val;
    this.next = popped.next;
    this.length--;
    return popped;
  }
}

class Block extends Stack {
    
}

let stack = new Stack(4,5,6,7,8,9)
stack.pop()
stack

// Ring structure
// let x = new Node(4,this);
// let y = new Node(5,x);
// x.next = y;
// let z = new Node(6, x);
// y.next = z;




class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.curr;
  }
  add(node) {
  let newNode = new Node(node);
  if (!this.head) { this.head = newNode.data };
  if(this.size) {newNode.next= newNode.data}
    this.size ++;
  }
  
  // get(idx){
  //   let i =0;
  //   while(i < idx){
  //     this.curr = this.head
  //     i++
  //   }
  //   return this.curr
  // }
}