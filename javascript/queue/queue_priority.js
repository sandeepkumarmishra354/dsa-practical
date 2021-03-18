class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class QueuePriority {
  constructor() {
    //create null initialized list
    this.list = null;
  }

  //add element in queue at the given position
  //if position is greater than total element, add element at the end
  //position must be greater than zero
  insert = (data, pos) => {
    if(pos <= 0) {
        console.log("entered position must be greater than zero.");
        return;
    }
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
  const queuePriority = new QueuePriority();
  queuePriority.insert(1);
  queuePriority.insert(2);
  queuePriority.insert(3);
  queuePriority.insert(4);
  queuePriority.display();
  queuePriority.delete();
  console.log("delete one item");
  queuePriority.display();
  queuePriority.delete();
  console.log("delete one item again");
  queuePriority.display();
};

//run the script
main();
