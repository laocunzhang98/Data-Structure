import { Stack,dec2bin} from "./Stack"

const stack = new Stack()

stack.push('aaaaaaa')
stack.push('bbbb')
stack.push('ccccc')
stack.pop()

console.log(stack)
console.log(stack.peek())
console.log(dec2bin(100))
console.log(dec2bin(1000))
console.log(dec2bin(50))