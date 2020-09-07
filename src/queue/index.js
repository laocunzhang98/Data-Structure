import { Queue, passGame ,PriorityQueue} from './queue'

// const queue = new Queue()
// queue.enqueue('aaa')
// queue.enqueue('bbb')
// queue.enqueue('ccc')
// console.log(queue.items);
// queue.dequeue()
// console.log(queue.items);
// console.log(passGame(['1','2','3','4','5'],3));
const queue = new PriorityQueue()
queue.enqueue('aaa', 100)
queue.enqueue('bbb', 90)
queue.enqueue('ccc', 150)
queue.enqueue('ddd', 140)
console.log(queue)