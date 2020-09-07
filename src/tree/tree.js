class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}



export class BinartSearchTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    const newnode = new Node(key)
    if (this.root === null) {
      this.root = newnode
    } else {
      this.insertNode(this.root, newnode)
    }
  }
  insertNode(node, newnode) {
    if (newnode.key > node.key) {
      if (node.right === null) {
        node.right = newnode
      }
      else {
        this.insertNode(node.right, newnode)
      }
    } else {
      if (newnode.key < node.key) {
        if (node.left === null) {
          node.left = newnode
        }
        else {
          this.insertNode(node.left, newnode)
        }
      }
    }
  }
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  preOrderTraverseNode(node) {

    if (node === null) {
      return
    }
    console.log(node.key);
    this.preOrderTraverseNode(node.left)
    this.preOrderTraverseNode(node.right)
  }
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  inOrderTraverseNode(node) {
    if (node === null) {
      return
    }

    this.inOrderTraverseNode(node.left)
    console.log(node.key);
    this.inOrderTraverseNode(node.right)
  }
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  postOrderTraverseNode(node) {
    if (node === null) {
      return
    }
    this.postOrderTraverseNode(node.left)
    this.postOrderTraverseNode(node.right)
    console.log(node.key);
  }
  min() {
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }
  max() {
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  search2(key) {

    let node = this.root
    while (node !== null) {
      if (node.key < key) {
        node = node.right
      } else if (node.key > key) {
        node = node.left
      } else {
        return true
      }
    }
    return false
  }
  remove(key) {
    // 找到要删除的节点
    let current = this.root
    let parent = null
    let isLeftChild = true

    while (current.key !== key) {
      parent = current
      if (current.key < key) {
        isLeftChild = false
        current = current.right
      } else {
        isLeftChild = true
        current = current.left
      }
      if (current === null) {
        return false
      }
    }
    // 找到节点 
    // 情况一 删除节点为叶子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
    else if (current.right === null) {
      parent.right = current.left
    }
    else if (current.left === null) {
      parent.left = current.right
    }

    // 两个节点
    else {
      let successor = this.getSuccessor(current)
      if (this.root === current) {
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      successor.left = current.left
    }
    return true
  }
  getSuccessor(delNode) {
    //求后继节点
    let successerParent = delNode;
    let successer = delNode;
    let current = delNode.right;
    while (current !== null) {
      successerParent = successer; //current的父节点
      successer = current //current的父节点
      current = current.left
    }
    if (successer !== delNode.right) {
      successerParent.left = successer.right
      successer.right = delNode.right
    }
    return successer
  }
}
