/*
 * Q-10 Write  a program  to reverse  stack  using  queue.
 * Sandeep mishra
 * MCA 1st year (sem-1)
 * Roll No. 2012093
 */

class Stack {
  top = -1;
  stack = [];

  push(ele) {
    this.top += 1;
    this.stack[this.top] = ele;
  }

  pop() {
    if (!this.isEmpty()) {
      const ele = this.stack[this.top];
      this.top -= 1;
      return ele;
    }
  }

  isEmpty() {
    return this.top === -1;
  }

  display() {
    if (!this.isEmpty()) {
      console.log(this.stack);
    }
  }
}

class Queue {
  front = 0;
  rear = 0;
  queue = [];

  push(ele) {
    this.queue[this.rear] = ele;
    this.rear += 1;
  }

  pop() {
    if (!this.isEmpty()) {
      //shift all elements one index left
      for (let i = 0; i < this.rear - 1; i++) {
        this.queue[i] = this.queue[i + 1];
      }
      this.rear -= 1;
    }
  }

  isEmpty() {
    return this.front === this.rear;
  }

  display() {
    if (!this.isEmpty()) {
      console.log(this.queue);
    }
  }
}

function reverseStack() {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.display();
    ////////////////
    const queue = new Queue();
    while(!stack.isEmpty()) {
        queue.push(stack.pop());
    }
    queue.display();
}

reverseStack();
