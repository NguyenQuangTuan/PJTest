const htmlencode = require('htmlencode');
const async = require('async')

var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('Everything is ok');
  }
});

// const newElasticsearch = require('elasticsearch')
// const newClient = new newElasticsearch.Client({
//   host: 'localhost:9200',
//   log: 'trace'
// })


let products = []

////////////////////////////////

client.update({
  index: 'products',
  type: '_doc',
  id: 335371,
  body: {
    doc: {
      store_id: 2847
    }
  }
}).then((res) => {
  console.log('ok')
})


/////////////////////////////////////////////////////
// Chuyen DB
// let index = 'products'
// const parseDB = require('./parseDB')

// client.search({
//   index: 'products',
//   _source: true,
//   // q: 335169,

//   body: {
//     from: 0,
//     size: 100,
//     query: {
//       match_all: {}
//     }
//   }
// }).then((res) => {
//   products = res.hits.hits
// }).then(() => {


  // async.each(products, (product, cb) => {
  //   product._source = parseDB(product._source.doc)
  //   client.index({
  //     index: index,
  //     type: '_doc',
  //     id: product._id,
  //     body: 
  //     product._source
  //     // {
  //     //   doc: product._source
  //     // }
  //   }).then((res) => {
  //     console.log('---------**--------')
  //     cb()
  //   }, (err) => {
  //     cb(err)
  //   })
  // }, (err) => {
  //   process.exit(1)
  // })

//   async.filter(products, (product) => {
//     client.create({
//       index: 'products_backup',
//       type: '_doc',
//       id: product._id,
//       body: product._source
//     }).then((res) => {
//       console.log('---***---')
//     })
//     // }
//   }, (err, results) => {
//     if (err) console.log('ERR: ' + err)
//     else console.log('OK: ' + results)
//   })
// })

///////////////////////////////////////////////////////////
// add totalRating and totalReview 
// client.search({
//   index: 'products',
//   _source: true,
//   // q: '_JUacWMB4BYxaqFps3hV',

//   body: {
//     from: 0,
//     size: 100,
//     query: {
//       match_all: {}
//     }
//   }
// }).then((res) => {
//   products = res.hits.hits
// }).then(() => {

//   async.filter(products, (product) => {
//     client.update({
//       index: 'products',
//       type: '_doc',
//       id: product._id,
//       body: {
//         doc: {
//           totalRating: 0,
//           totalReview: 0,
//           ratingAverage: 0,
//         }
//       }
//     }).then((res) => {
//       console.log('---***---')
//     })
//     // }
//   }, (err, results) => {
//     if (err) console.log('ERR: ' + err)
//     else console.log('OK: ' + results)
//   })
// })

/////////////////////////////
// parse price
// client.search({
//   index: 'products',
//   _source: true,
//   // q: '_JUacWMB4BYxaqFps3hV',

//   body: {
//     // aggs: {
//     //   id: {
//     //     terms: {
//     //       field: 'id'
//     //     }
//     //   }
//     // }
//     from: 0 * 10,
//     size: 30,
//     query: {
//       match_all: {}
//     }
//   }
// }).then((res) => {
//   products = res.hits.hits
// }).then(() => {

//   async.filter(products, (product) => {
//   // for (j = 0; j < products.length; j++) {
//     // product = products[j]
//     for (i = 0; i < product._source.variants.length; i++) {
//       let variant = product._source.variants[i]


//       if (variant.price) {
//         variant.price = +parseFloat(variant.price).toFixed(2)
//       } else {
//         variant.price = 0
//       }

//       if (variant.compared_price) {
//         variant.compared_price = +parseFloat(variant.compared_price).toFixed(2)
//         // variant.compared_price = '15.00'
//       } else if (variant.comparedPrice) {
//         variant.compared_price = +parseFloat(variant.comparedPrice).toFixed(2)
//         // variant.compared_price = '15.00'
//         delete variant.comparedPrice
//       } else {
//         variant.compared_price = variant.price
//         // variant.compared_price = '15.00'
//       }
//     }
//     client.update({
//       index: 'products',
//       type: '_doc',
//       id: product._id,
//       body: {
//         doc: {
//           variants: product._source.variants
//         }
//       }
//     }).then((res) => {
//       console.log('---***---')
//     })
//   // }
//   }, (err, results) => {
//     if(err) console.log('ERR: ' + err)
//     else console.log('OK: ' + results)
//   })
// })



// client.update({
//   index: 'products',
//   type: '_doc',
//   id: res.hits.hits[0]._id,
//   body: {
//     doc: {
//       description: res.hits.hits[0]._source.description
//     }
//   }
// })




// const parsedDescription = (product, callback) => {
//   product._source.description = htmlencode.htmlDecode(product._source.description)
//   product._source.description = product._source.description.replace(/<[^<]*>|\\[^]/gi, '')

//   client.update({
//     index: 'products',
//     type: '_doc',
//     id: res.hits.hits[0]._id,
//     body: {
//       doc: {
//         description: res.hits.hits[0]._source.description
//       }
//     }
//   })

// }

// async.eachLimit(products, 1, (product, callback) => {
//   product._source.description = htmlencode.htmlDecode(product._source.description)
//   product._source.description = product._source.description.replace(/<[^<]*>|\\[^]/gi, '')

//   client.update({
//     index: 'products',
//     type: '_doc',
//     id: res.hits.hits[0]._id,
//     body: {
//       doc: {
//         description: res.hits.hits[0]._source.description
//       }
//     }
//   })
// }, (err) => {
//   console.log(err)
// })

// client.search({
//   index: 'products',
//   _source: true,
//   // q: 335162,

//   body: {
//     aggs: {
//       id: {
//         terms: {
//           field: 'id'
//         }
//       }
//     }
//   }
// }).then((res) => {
//   arr = res.hits.hits
//   let arrCharacter = []
//   arrCharacter.push({ key: /&#39;s/gi, value: "'" })

//   res.hits.hits[0]._source.description = res.hits.hits[0]._source.description.replace(/<[^<]*>|\\[^]/gi, '')
//   for (i = 0; i < arrCharacter.length; i++) {
//     res.hits.hits[0]._source.description = res.hits.hits[0]._source.description.replace(arrCharacter[i].key, arrCharacter[i].value)
//   }

//   res.hits.hits[0]._source.description = htmlencode.htmlDecode(res.hits.hits[0]._source.description)

//   res.hits.hits[0]._source.description = res.hits.hits[0]._source.description.replace(/<[^<]*>|\\[^]/gi, '')

//   client.update({
//     index: 'products',
//     type: '_doc',
//     id: res.hits.hits[0]._id,
//     body: {
//       doc: {
//         description: res.hits.hits[0]._source.description
//       }
//     }
//   })
//   console.log(res)
// })