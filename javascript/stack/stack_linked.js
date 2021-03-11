class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.list = null;
  }

  push = (data) => {
    const node = new Node(data, null);
    //add new node at top of stack
    node.next = this.list;
    this.list = node;
  };

  pop = () => {
    if(this.list !== null) {
        const currNode = this.list;
        this.list = this.list.next;
        return currNode.data;
    } else {
        console.log("stack is empty");
    }
  };

  display = () => {
    let tmpList = this.list;
    //loop till last element...
    while (tmpList !== null) {
      console.log(tmpList.data);
      tmpList = tmpList.next;
    }
  };
}

//staring point of script
const main = () => {
  const stack = new Stack(5);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.display();
  console.log("pop");
  stack.pop();
  stack.pop();
  stack.display();
};

//run program
main();
