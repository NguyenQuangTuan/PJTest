// const App16 = require('./app16')
// const app16 = new App16()
// console.log(app16.log('tuan'))

// // const GetNamespace = require('continuation-local-storage').getNamespace
// // const get_namespace =  GetNamespace('tiny-order-service')

// // gnp = GetNamespace.getNamespace('tiny-order-service')

// console.log('')

// let numbers = new Set([1,"tuan",{so: 5}]);

// numbers.add("tuan")
// numbers.delete(2)
// console.log(numbers)

// let map = new Map([
//     ['name', 'tuan'],
//     ['year', 2015]
// ])

// for(var entry of map.entries()){
//     console.log(entry[0] + '-' + entry[1])
// }

// console.log(map)

let symbol1 = Symbol();
let symbol2 = symbol1;
console.log(symbol1 === symbol2); // false