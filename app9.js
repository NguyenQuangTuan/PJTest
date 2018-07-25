
// console.log(Object.keys({}).length)

///////////////////////////////////////////
// var str = 'Twas the night before Xmas...';
// var newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr);

///////////////////////////////////
let i='1 '
let x = Number(i)

if (x) console.log(x)
else console.log('err')


////////////////////////////////////
// var arr = ['a', 'b', 'c']
// var obj = {}
// for (i=0; i<arr.length; i++){
//     obj(arr[i])
// }

////////////////////////////////////
// var test = {
//     abc: 123,
//     'cba': {
//         hik:123,
//         'kih': 111
//     }
// }

// delete test.cba["kih"]
// delete test.cba;
// console.log(test.ishas('abc'))
////////////////////////////

// var arr = [1,2,3,4,5]

// for(x in arr){
//     console.log('-' + x + '-')
// }

/////////////////////////////////////////////////////////

// for(i = 0; i<3; i++){
//     console.log('lan i: '+ i)
//     let x = {}
//     console.log('vua khai bao x xong' + x)
//     x = i+1
    
//     console.log('i= ' + i + '- x= ' + x)

// }
// console.log(' kq: x = ' + x)

// Khai bao var x => x luu trong ca ct, van duoc luu gia tri trong vong lap tiep
// khai bao let x => x sd trong 1 vong lap, ra ngoai k dung dc
// khai bao x = {} => sau moi vong lap khoi tao lai x, ra ngoai for van goi dc

// lan i: 0------- x= undefined
// app9.js:22
// vua khai bao x xongundefined
// app9.js:24
// i= 0- x= 1
// app9.js:27
// lan i: 1------- x= 1
// app9.js:22
// vua khai bao x xong1
// app9.js:24
// i= 1- x= 2
// app9.js:27
// lan i: 2------- x= 2
// app9.js:22
// vua khai bao x xong2
// app9.js:24
// i= 2- x= 3
// app9.js:27
//  kq: x = 3