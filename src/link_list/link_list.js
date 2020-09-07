export class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null
  }
}
export class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  append(ele) {
    const node = new Node(ele)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        // current 指向最后节点
        current = current.next
      }
      current.next = node
    }
    this.length++
  }
  insert(ele, position) {
    if (position < 0 || position > this.length) {
      return false
    }
    const node = new Node(ele)
    if (position == 0) {
      node.next = this.head
      this.head = node
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index < position) {
        index++
        previous = current
        current = current.next
      }
      previous.next = node
      node.next = current
    }
    this.length++
    return true

  }
  get(position) {
    if (position < 0 || position > this.length - 1) {
      return null
    } else {
      let current = this.head
      let index = 0
      while (index++ < position) {
        current = current.next
      } 
      return current.ele
    }
  }
  indexOf(ele) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.ele === ele) {
        return index
      }
      current = current.next
      index ++
    }
    return -1
  }
  
  removeAt(position) {
    if (position < 0 || position > this.length - 1) {
      return null
    } 
    let current = this.head;
    let index = 0 
    let previous = null;
    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.ele
  }
  update(ele,position) {
    if (position < 0 || position > this.length - 1) {
      return null
    } else {
      this.removeAt(position)
      this.insert(position,ele)
    }
  }
  remove(ele) {
    
    let index = this.indexOf(ele)
    if (index != -1) {
      this.removeAt(index)
      return ele
    } else {
      return null
    } 
  }
  isEmpty() {
    if (this.length === 0) {
      return true
    }
    return false
  }
  size() {
    return this.length
  }
}