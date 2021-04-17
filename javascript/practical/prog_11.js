/*
 * Q-11 Write  a program  to implement  binary  search  tree with  its  operations.
 * Sandeep mishra
 * MCA 1st year (sem-1)
 * Roll No. 2012093
 */

class DataNode {
  data = null;
  left = null;
  right = null;
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  rootNode = null;

  // expected argument is number.
  addEle(ele) {
    // create new node.
    const newNode = new DataNode(ele, null, null);
    // check if root node is null.
    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }
    let tmpRoot = this.rootNode;
    let prevNode = null;
    let atLeft = false; // this flag will determine where to insert new node.
    // traverse list till appropriate location.
    while (tmpRoot !== null) {
      prevNode = tmpRoot;
      // if element is less than node's element then go to the next "LEFT" node.
      // if element is greater than or equal to node's element then go to the next "RIGHT" node.
      if (ele < tmpRoot.data) {
        tmpRoot = tmpRoot.left;
        atLeft = true;
      } else {
        tmpRoot = tmpRoot.right;
        atLeft = false;
      }
    }
    if (atLeft) prevNode.left = newNode;
    else prevNode.right = newNode;
  }

  // expected argument is number.
  search(ele) {
    //
  }
}
