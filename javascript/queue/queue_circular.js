class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class QueueCircular {
  constructor() {
    //create null initialized list
    this.list = null;
  }

  insert = (data) => {
    const node = new Node(data, null, null);
    //check if it is first node to be added
    if (this.list === null) {
      node.next = node;
      this.list = node;
      return;
    }
    let tmpList = this.list;
    while (tmpList.next !== this.list) {
      tmpList = tmpList.next;
    }
    node.prev = tmpList;
    node.next = this.list;
    tmpList.next = node;
    return;
  };

  delete = () => {
    if (this.list !== null) {
      const secNode = this.list.next;
      //check if there is only one node
      if(this.list.next === this.list) {
          this.list = null;
          return;
      }
      let tmpList = this.list;
      while (tmpList.next !== this.list) {
        tmpList = tmpList.next;
      }
      tmpList.next = this.list.next;
      this.list = secNode;
    } else {
      console.log("queue is empty");
    }
  };

  display = () => {
    if (this.list !== null) {
      let tmpList = this.list;
      while (tmpList.next !== this.list) {
        console.log(tmpList.data);
        tmpList = tmpList.next;
      }
      console.log(tmpList.data);
    } else {
      console.log("queue is empty");
    }
  };
}

//starting point of the script
const main = () => {
  const queueCircular = new QueueCircular();
  queueCircular.insert(1);
  queueCircular.insert(2);
  queueCircular.insert(3);
  queueCircular.insert(4);
  queueCircular.display();
  console.log("2 node deleted");
  queueCircular.delete();
  queueCircular.delete();
  queueCircular.display();
};

//run the script
main();
