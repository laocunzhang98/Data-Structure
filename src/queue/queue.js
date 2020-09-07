export class Queue {
  constructor() {
    this.items = []
  }
  enqueue(ele) {
    this.items.push(ele)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    if (this.isEmtpy()) {
      return null
    }

    return this.items[0]
  }
  isEmtpy() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
}
class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}
export class PriorityQueue extends Queue {

  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority)
    let added = false
    // console.log(queueElement);
    if (this.isEmtpy()) {
      this.items.push(queueElement)
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          added = true
          break;
        }
      }
      // 优先级都大于新插入的元素时 就插入到最后
      if (!added) {
        this.items.push(queueElement)
      }

    }

  }
}


export function passGame(namelist, num) {
  const queue = new Queue()
  for (let i = 0; i < namelist.length; i++) {
    queue.enqueue(namelist[i])
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  return queue.front()
}