class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    //create null initialized list
    this.list = null;
  }

  insert = (data) => {
    const node = new Node(data, null, null);
    //check if it is first node to be added
    if (this.list === null) {
      this.list = node;
      return;
    }
    let tmpList = this.list;
    while(tmpList.next !== null) {
      tmpList = tmpList.next;
    }
    node.prev = tmpList;
    tmpList.next = node;
    return;
  };

  delete = (data) => {
    //check if list is not empty
    if (this.list !== null) {
      //check for first element
      if (this.list.data === data) {
        this.list = this.list.next;
        return;
      }
      let tmpList = this.list;
      let prevNode = null;
      while (tmpList !== null && tmpList.data !== data) {
        prevNode = tmpList;
        tmpList = tmpList.next;
      }
      //check if match not found
      if (tmpList === null) {
        console.log(`data: ${data} not found.`);
        return;
      }
      //data match found - remove the link.
      //check if it's last node
      if(tmpList.next !== null)
        tmpList.next.prev = prevNode;
      prevNode.next = tmpList.next;
      return;
    }
  };

  reverse = () => {
    if(this.list !== null) {
      let tmpList = this.list;
      let prevNode = null;
      let nxtNode = null;
      while (tmpList !== null) {
        nxtNode = tmpList.next;
        tmpList.prev = nxtNode;
        tmpList.next = prevNode;
        prevNode = tmpList;
        tmpList = nxtNode;
      }
      //now previous points to first node, assign it to main list
      this.list = prevNode;
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
  const linkedList = new DoublyLinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.reverse();
  linkedList.display();
};

//run the script
main();
