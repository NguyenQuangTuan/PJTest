
let string = 'myshopify.com'
let new_string = string.split('.')
console.log(new_string)
new_string.length = new_string.length - 2
console.log(new_string)
new_string = new_string.join('.')
console.log(new_string)
///////////////////////////////////////////////////////////
// const x = {key : "123"}
// x.key = '456'
// x.key2 = '123'
// console.log('')

// const y = 5;
// for(i=0;i<5;i++){
//     y = i
// }
/////////////////////////////////////////////////
// var async = require('async')

// var fnTest = function(i, callback){
//     i = i+1
//     return callback (null, i)
// }

// async.concat([1,2,3], fnTest , function(err, files) {
//     console.log(files)
// });

/////////////////////////////////////////////////
// var arr = [42, 'foo', 42, 'foo', true, true]
// const removeDuplicateItems = arr => [...new Set(arr)];
// console.log(removeDuplicateItems())

//=> [42, "foo", true]

// var arr = [55, 44, 65];
// var set = new Set(arr);
// console.log(set.size === arr.length);
// console.log(set.size)
// console.log(set.has(65));

// 0 == false   // true
// 0 === false  // false, because they are of a different type
// 1 == "1"     // true, automatic type conversion for value only
// 1 === "1"    // false, because they are of a different type
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false