// var arr = [42, 'foo', 42, 'foo', true, true]
// const removeDuplicateItems = arr => [...new Set(arr)];
// console.log(removeDuplicateItems())

//=> [42, "foo", true]

var arr = [55, 44, 65];
var set = new Set(arr);
console.log(set.size === arr.length);
console.log(set.size)
console.log(set.has(65));

// 0 == false   // true
// 0 === false  // false, because they are of a different type
// 1 == "1"     // true, automatic type conversion for value only
// 1 === "1"    // false, because they are of a different type
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false