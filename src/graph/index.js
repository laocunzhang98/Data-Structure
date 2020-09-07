// import { Dictionay } from './dict'

// const dict = new Dictionay()

// dict.set('wangwei','shuaige')
// dict.set('sex','nan')
// dict.set('age', '18')
// dict.remove('sex')
// console.log(dict.items);

import { Graph } from './graph'
const graph = new Graph()

// 添加顶点
var myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
myVertexes.forEach((item, index) => {
  graph.addVertex(item)
})

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());
console.log(graph.edges);
console.log(graph.bfs(graph.vertexes[0]));
console.log(graph.dfs(graph.vertexes[0]));
