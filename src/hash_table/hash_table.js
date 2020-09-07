export function hashFunc(str, max) {
  let hashcode = 0

  // 霍纳法则
  for (let i = 0; i < str.length; i++) {
    hashcode = 31 * hashcode + str.charCodeAt(i)
  }
  hashcode = hashcode % max
  return hashcode
}


export function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}


const LOAD_FACTOR = 0.75
const MIN_LOAD_FACTOR = 0.25


export class HashTable {
  constructor() {
    this.storage = [] // 数组存储元素
    this.count = 0
    this.limit = 7 // 数组长度
  }
  hashFunc(str, max) {
    let hashcode = 0

    // huo'na
    for (let i = 0; i < str.length; i++) {
      hashcode = 31 * hashcode + str.charCodeAt(i)
    }
    hashcode = hashcode % max
    return hashcode
  }
  put(key, value) {
    const index = this.hashFunc(key, this.limit)

    let bucket = this.storage[index]
    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }
    // 判断是插入操作还是修改操作
    let overide = false
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        overide = true
      }
    }
    if (!overide) {
      bucket.push([key, value])
      this.count++
      if (this.count > this.limit * LOAD_FACTOR) {
        let newLimit = this.limit * 2
        newLimit = this.getPrime(newLimit)
        this.resize(newLimit)
      }
    }
  }
  get(key) {
    const index = this.hashFunc(key, this.limit)
    const bucket = this.storage[index]
    if (bucket == undefined) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }
  remove(key) {
    const index = this.hashFunc(key, this.limit)
    const bucket = this.storage[index]
    if (bucket == undefined) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)

        if (this.limit > 8 && this.count < this.limit * MIN_LOAD_FACTOR) {
          let newLimit = Math.floor(this.limit / 2)
          newLimit = this.getPrime(newLimit)
          this.resize(newLimit)
        }
        return tuple[1]
      }
    }
    return null
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  resize(newLimit) {
    let oldStorage = this.storage
    this.limit = newLimit
    this.storage = []
    this.count = 0
    // 取出oldStorage
    oldStorage.forEach(bucket => {
      if (bucket === undefined) {
        return
      }
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }
  isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  getPrime(num) {
    while (!isPrime(num)) {
      num++
      if (isPrime(num)) {
        return num
      }
    }
    return num
  }
}
