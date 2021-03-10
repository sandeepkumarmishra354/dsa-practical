class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
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
      prevNode.next = tmpList.next;
      return;
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

  reverse = () => {
    if (this.list !== null) {
      let tmpList = this.list;
      let prevNode = null;
      let nxtNode = null;
      while (tmpList !== null) {
        //store next node
        nxtNode = tmpList.next;
        //point current node's next to previous node
        tmpList.next = prevNode;
        //now store current node as previous node
        prevNode = tmpList;
        //move current node to next node which we stored initially
        tmpList = nxtNode;
      }
      //now previous points to first node, assign it to main list
      this.list = prevNode;
    }
  };
}

//starting point of the script
const main = () => {
  const linkedList = new SinglyLinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  console.log("--------original linked list--------");
  linkedList.display();
  console.log("--------reversed linked list--------");
  linkedList.reverse();
  linkedList.display();
  console.log("--------delete data 3--------");
  linkedList.delete(3);
  linkedList.display();
};

//run the script
main();
