export class Stack {
  constructor() {
    this.items = []
  }
  push(ele) {
    this.items.push(ele)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length == 0
  }
  size() {
    return this.items.length
  }
}

export function dec2bin(num) {
  const stack = new Stack()
  while (num > 0) {
    let remainder = num % 2;
    num = Math.floor(num / 2)
    stack.push(remainder)
  }
  let bin = ''
  while (!stack.isEmpty()) {
    bin += stack.pop()
  }
  return bin
}