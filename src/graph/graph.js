import { Dictionay } from './dict'
import { Queue } from './queue'
export class Graph {
  constructor() {
    this.vertexes = [] //顶点
    this.edges = new Dictionay()
  }
  // 添加顶点的方法
  addVertex(v) {
    this.vertexes.push(v)
    this.edges.set(v, [])
  }
  // 添加边的方法
  addEdge(v1, v2) {
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
  }
  toString() {
    let resultString = ''
    this.vertexes.forEach((item) => {
      let vEdges = this.edges.get(item).toString()
      resultString += item + '->' + vEdges + '\n'
    })
    return resultString
  }
  // 初始化颜色
  initializeColor() {
    let colors = {}
    this.vertexes.forEach((item) => {
      colors[item] = 'white'
    })
    return colors
  }
  // 广度优先搜索
  bfs(initV) {
    // 初始化颜色
    var colors = this.initializeColor()
    // 创建队列
    let queue = new Queue()
    queue.enqueue(initV)
    let result = ''
    while (!queue.isEmtpy()) {
      // 从队列中取出顶点

      let v = queue.dequeue()
      let vlist = this.edges.get(v)
      // v设置成灰色
      colors[v] = 'gray'
      vlist.forEach((item) => {
        if (colors[item] == 'white') {
          colors[item] = 'gray'
          queue.enqueue(item)
        }
      })
      // 访问顶点
      // hander(v)
      result += v + ''
      colors[v] = 'black'
    }
    return result
  }
  // 深度优先算法
  dfs(initV) {
    let result = ''
    let colors = this.initializeColor()
    
    this.dfsVisit(initV, colors, (v) => {
      result += v
    })
    return result
  }
  dfsVisit(v, colors,handle) {
    colors[v] = 'gray'
    handle(v)
    this.edges.get(v).forEach(item => {
      if (colors[item] === 'white') {
        this.dfsVisit(item, colors,handle)
      }
    })
    colors[v] = 'black'
  }
}