var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client()

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('Everything is ok');
  }
});
// Search Some Aggregation

// client.search({
//   index: 'product_review',
//   type: 'review',
//   body: {
//     query: {
//       bool: {
//         filter: [
//           {
//             bool: {
//               should: [
//                 { term: { rating: '3' } },
//                 { term: { rating: '4' } }
//               ]
//             }
//           },
//           {
//             term: { productId: '1000' }
//           }
//         ]
//       }
//     }
//   }
// }).then((res) => {
//   console.log(JSON.stringify(res))
// }, (err) => {
//   console.log(JSON.stringify(err))
// })

// sear Aggregation
client.search({
  index: 'product_review',
  body: {

    // "query": {
    //   "term": {
    //     "fabric": "cotton"
    //   }
    // },
    "aggs": {
      "rating": {
        "terms": {
          "field": "rating"
        }
      },
      "createdAt": {
        "terms": {
          "field": "createdAt"
        }
      }
    }

  }

}).then((res) => {
  console.log(JSON.stringify(res, null, 2))
}, (err) => {
  console.log(JSON.stringify(err, null, 2))
})