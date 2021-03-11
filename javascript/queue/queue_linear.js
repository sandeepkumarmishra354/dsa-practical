class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class QueueLinear {
  constructor() {
    //create null initialized list
    this.list = null;
  }

  insert = (data) => {
    const node = new Node(data, null);
    if (this.list === null) {
      //this means we are inserting very first element to the list.
      this.list = node;
      return;
    }
    //check for last element and insert there
    let tmpList = this.list;
    while (tmpList.next !== null) {
      tmpList = tmpList.next;
    }
    tmpList.next = node;
    return;
  };

  delete = () => {
    if (this.list !== null) {
      const currNode = this.list;
      this.list = this.list.next;
      return currNode.data;
    } else {
        console.log("queue is empty");
    }
  };

  display = () => {
    let tmpList = this.list;
    //loop till last element...
    while (tmpList !== null) {
      console.log(tmpList.data);
      console.log(`\u2193`); //optional (down arrow)
      tmpList = tmpList.next;
    }
  };

}

//starting point of the script
const main = () => {
  const queueLinear = new QueueLinear();
  queueLinear.insert(1);
  queueLinear.insert(2);
  queueLinear.insert(3);
  queueLinear.insert(4);
  queueLinear.display();
  queueLinear.delete();
  console.log("delete one item");
  queueLinear.display();
  queueLinear.delete();
  console.log("delete one item again");
  queueLinear.display();
};

//run the script
main();
