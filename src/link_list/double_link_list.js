import { LinkedList, Node } from './link_list'

class DoubleNode extends Node {
  constructor(ele) {
    super(ele)
    this.prev = null
  }
}

export class DoubleLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null
  }
  //append
  append(ele) {
    // 创建元素
    const node = new DoubleNode(ele)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
  }
  insert(position, ele) {
    if (position < 0 || position > this.length) {
      return false
    }
    const node = new DoubleNode(ele)
    if (position === 0) {
      if (this.head === null) {
        this.head = node
        this.tail = node
      }
      else {
        node.next = this.head
        this.head.prev = node
        this.head = node 
      }
    } else if (position === this.length) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      let index = 0
      let current = this.head
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = node
      node.prev = previous
      current.prev = node
      node.next = current

    }
    this.length++
    return true
  }
  removeAt(position) {

    if (position < 0 || position > this.length - 1) {
      return null
    }
    let current = this.head
    if (position === 0) {
      current = this.head
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      
    } else if (position === this.length - 1) {
      current = this.tail
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      let index = 0 
      let previous = null
      
      while (index++ < position) {
        previous = current
        current = current.next
        
      }
      current.prev.next = current.next
      current.next.prev = previous
      
    }
    this.length--
    return current.ele
   
  }
}