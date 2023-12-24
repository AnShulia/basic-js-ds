const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  constructor(data) {
    //this.data = data;
    //this.left = null;
    //this.right = null;
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    function addWith(node, data) {
      if (!node) {
        return new Node(data);
      }


      if (node.data === data) {
        return node;
      }
      if ( data < node.data) {
        node.left = addWith(node.left, data);
      } else {
        node.right = addWith(node.right, data);
      }
    return node;
    }

    this.node = addWith(this.node, data);
  }

  has(data) {
    function has(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
      has(node.left, data) :
      has(node.right, data);
    }

    return has(this.node, data)
  }

  find(data) {
   function find(node, data) {
    if (!node) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    return data < node.data ?
      find(node.left, data) :
      find(node.right, data);
   }

   return find(this.node, data)
  }

  remove(data) {
    function remove(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = remove(node.right, minRight.data);

        return node;
      }
    }
    
    return remove(this.node, data);
  }

  min() {
    if (!this.node) {
      return;
    }

    let nodeMin = this.node;

    while (nodeMin.left) {
      nodeMin = nodeMin.left;
    }
    return nodeMin.data;
  }

  max() {
    if (!this.node) {
      return;
    }
    let nodeMax = this.node;
    while (nodeMax.right) {
      nodeMax = nodeMax.right;
    }
    return nodeMax.data;
  }
}


module.exports = {
  BinarySearchTree
};