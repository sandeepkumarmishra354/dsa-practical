/**
 * Author: sandeep mishra
 **/
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  insert = (data) => {
    const newNode = new Node(data, null, null);
    //check if root node is null
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    //traverse this list and insert at appropriate location
    let tmpRoot = this.root;
    let prevRoot;
    let atLeft = false;

    while (tmpRoot !== null) {
      prevRoot = tmpRoot;
      if (data < tmpRoot.data) {
        tmpRoot = tmpRoot.left;
        atLeft = true;
      } else {
        tmpRoot = tmpRoot.right;
        atLeft = false;
      }
    }
    //check and add
    if (atLeft) prevRoot.left = newNode;
    else prevRoot.right = newNode;
  };

  //
  displayTreeLeft = () => {
    let tmpRoot = this.root;
    while (tmpRoot !== null) {
      console.log(`data: ${tmpRoot.data}`);
      tmpRoot = tmpRoot.left;
    }
  };
  displayTreeRight = () => {
    let tmpRoot = this.root;
    while (tmpRoot !== null) {
      console.log(`data: ${tmpRoot.data}`);
      tmpRoot = tmpRoot.right;
    }
  };
}

//main entry point
const main = () => {
  let bts = new BTS();
  bts.insert(45);
  bts.insert(23);
  bts.insert(65);
  bts.insert(90);
  bts.insert(10);
  bts.displayTreeLeft();
  console.log("--------------");
  bts.displayTreeRight();
};

main();
