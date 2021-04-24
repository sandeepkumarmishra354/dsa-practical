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
  insert(ele) {
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

  getParentNode(node) {
    let parentNode = null;
    if (this.rootNode) {
      // check for first node
      if (this.rootNode === node) return parentNode;
      let tmpRoot = this.rootNode;
      // check until tmpRoot becomes null or node matched.
      while (tmpRoot !== null && tmpRoot !== node) {
        parentNode = tmpRoot;
        if (node.data < tmpRoot.data) tmpRoot = tmpRoot.left;
        else tmpRoot = tmpRoot.right;
      }
      return parentNode;
    }
    return parentNode;
  }

  findMin(node) {
    let minNode = null;
    if (this.rootNode) {
      minNode = node;
      while (minNode.left) {
        minNode = minNode.left;
      }
    }
    return minNode;
  }

  // expected argument is number.
  search(ele) {
    let foundNode = null;
    if (this.rootNode) {
      // check for first node
      if (this.rootNode.data === ele) {
        foundNode = this.rootNode;
        return foundNode;
      }
      let tmpRoot = this.rootNode;
      // check until tmpRoot becomes null or element matched in node.
      while (tmpRoot !== null && tmpRoot.data !== ele) {
        if (ele < tmpRoot.data) tmpRoot = tmpRoot.left;
        else tmpRoot = tmpRoot.right;
      }
      //if tempRoot is null it means element not found.
      if (tmpRoot) foundNode = tmpRoot;
      return foundNode;
    }
    return foundNode;
  }

  // expected argument is number.
  delete(ele) {
    if (this.rootNode) {
      const nodeToDelete = this.search(ele);
      // only delete if node found
      if (nodeToDelete) {
        const parentNode = this.getParentNode(nodeToDelete);
        // case 1: when node has no children (it's a leaf node)
        // then simply delete the node
        if (!nodeToDelete.left && !nodeToDelete.right) {
          if (nodeToDelete.data < parentNode.data) parentNode.left = null;
          else parentNode.right = null;
          return;
        }
        // case 2: when node has only 1 child
        // simply point the child node as parent node
        if (
          (nodeToDelete.left && !nodeToDelete.right) ||
          (nodeToDelete.right && !nodeToDelete.left)
        ) {
          const hasLeftChild = !!nodeToDelete.left; // !! this keyword will converts value to boolean
          const child = hasLeftChild ? nodeToDelete.left : nodeToDelete.right;
          if (nodeToDelete.data < parentNode.data) parentNode.left = child;
          else parentNode.right = child;
          return;
        }
        // case 3: when node has both left and right child
        // Find minimum value in the right subtree of the node to be deleted
        if (nodeToDelete.left && nodeToDelete.right) {
          //find successor (min value from right sub-tree)
          const minNode = this.findMin(nodeToDelete.right);
          const parentNodeOfMin = this.getParentNode(minNode);
          nodeToDelete.data = minNode.data;
          parentNodeOfMin.left = null;
        }
      } else {
        throw new Error(`Value: ${ele} not present in bst.`);
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(11);
bst.insert(13);
bst.insert(8);
bst.insert(9);
console.log(bst.rootNode);
bst.delete(12);
console.log("-------------------");
console.log(bst.rootNode);
