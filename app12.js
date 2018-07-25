// function delay() {
//     return new Promise(resolve => setTimeout(resolve, 3000));

// }

// async function delayedLog(item) {
//     try {
//         let res = await delay();
//         console.log(res)
//     }
//     catch(err) {

//     }

//     console.log(item);
// }

// // async function processArray(array) {
// //     array.forEach(async (item) => {
// //         await delayedLog(item);
// //     })

// //     console.log('Done! ')
// // }

// async function processArray(array) {
//     for(const item of array) {
//         await delayedLog(item);
//     }

//     console.log('Done! ')
// }

// processArray([1, 2, 3])

/////////////////////////////////////////////////////
const async = require('async')
async function test() {
    return new Promise(resolve => setTimeout(resolve, 1000))
}

await function run() {
    console.log(number + 'truoc')
    let res = await test()
    console.log(res)
    console.log(number + 'sau')
}

run()

// async.each([1, 2, 3, 4], (number) => {
//     console.log(number + 'truoc')
//     let res = await test()
//     console.log(res)
//     console.log(number + 'sau')
// }, (err,res) => {

// })