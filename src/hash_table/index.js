import { hashFunc, HashTable,isPrime } from './hash_table'
// console.log(hashFunc("name",11))
// console.log(hashFunc("abc",11))
// console.log(hashFunc("dba",11))
// console.log(hashFunc("sjj",11))
// console.log(hashFunc("nba",11))
const hashTable = new HashTable()
// hashTable.put("name","why")
// hashTable.put("name","wangwei")
// hashTable.put("age","18")
// hashTable.put("sex","nan")
// hashTable.put("height", "188")

// console.log(hashTable.storage)
// console.log(hashTable.get('aaa'))
// console.log(hashTable.remove('age'))
hashTable.put('aaa', 111)
hashTable.put('bbb', 111)
hashTable.remove('aaa')
console.log(hashTable);



