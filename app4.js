// Bat elaticsearch: sudo systemctl start elasticsearch
// Tao index: curl -XPUT 'localhost:9200/customer?pretty'
// Xem cac index: curl 'localhost:9200/_cat/indices?v'
// Xem suc khoe: curl 'localhost:9200/_cat/health?v'
// Xem node: curl 'localhost:9200/_cat/nodes?v'
// Xoa Index: curl -XDELETE 'localhost:9200/customer?pretty' -> customer la ten index
// Xem mapping: curl 'localhost:9200/shirts/_mapping/shirt?pretty'

//* Seting index:
// {
//   "settings": {
//     "number_of_shards": 1,
//     "number_of_replicas": 1
//   },
//   "mappings": {
//     "shirt": {
//       "properties": {
//         "name": {
//           "type": "text"
//         },
//         "size": {
//           "type": "keyword"
//         },
//         "color": {
//           "type": "keyword"
//         },
//         "fabric": {
//           "type": "keyword"
//         }
//         "price": {
//           "type": "long"
//         }
//       }
//     }
//   }
// }
//**************************** */

// {
//   "settings": {
//     "number_of_shards": 2,
//     "number_of_replicas": 1,
//     "index": {
//       "analysis": {
//         "analyzer": {
//           "myCustomAnalyzer": {
//             "type": "custom",
//             "tokenizer": "myCustomTokenizer",
//             "filter": ["myCustomFilter1", "myCustomFilter2"],
//             "char_filter": ["myCustomCharFilter"]
//           }
//           },
//         "tokenizer": {
//           "myCustomTokenizer": {
//           "type": "letter"
//          }
//         },
//         "filter": {
//           "myCustomFilter1": {
//           "type": "lowercase"
//           },
//           "myCustomFilter2": {
//            "type": "kstem"
//           }
//         },
//         "char_filter": {
//           "myCustomCharFilter": {
//           "type": "mapping",
//           "mappings": ["ph=>f", "u=>you"]
//           }
//         }
//       }
//     }
//   },
//   "mappings" : {
//    "document" : {
//      "properties" : {
//        "description" : {
//          "type" : "text",
//          "analyzer" : "myCustomAnalyzer"
//        }
//      }
//    }
//  }
// }

/************************************ */
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


// client.indices.create({
//   index: 'test',
//   mapping: {
//     house: {
//       name: {
//         type: 'text'
//       },
//       title: {
//         type: 'text'
//       }
//     }
//   }
// });


///////////////////////////////
// client.delete({
//   index: 'stores',
//   type: '_doc',
//   id: 2789
// }).then((res) => {
//   console.log(JSON.stringify(res, null, 2))
// })

// client.create({
//   index: 'stores',
//   type: '_doc',
//   id: 2881,
//   body: {
//     "id": 2880,
//     "shop_name": "octopuff.myshopify.com",
//     "primary_email": "",
//     "email": "support@octopuff.co.uk",
//     "rating_average": 0,
//     "total_review": 0,
//     "total_rating": 0,

//   }
// })

client.update({
  index: 'test',
  type: '_doc',
  id: 5,
  body: {
    doc: {
      "title": 'Nguyen Quang Tuan',
    }
  }
}).then((res) => {
  console.log(JSON.stringify(res, null, 2))
}, (err) => {
  console.log(JSON.stringify(err, null, 2))
})

//////////////////////////////////////
// query_string
// client.search({
//   index: 'shirts',
//   // type: 'shirt',
//   body: {
//     query: {
//       query_string: {
//         query: "abc",
//         default_field: "fabric"
//       }      
//     }
//   }
// }).then((res) => {
//   console.log(JSON.stringify(res))
// }, (err) => {
//   console.log(JSON.stringify(err))
// })

////////////////////////////////////////////////
// update
// client.update({
//   index: 'stores',
//   type: '_doc',
//   id: 'abc123',
//   body: {
//     doc: {
//       asdfghj: 0
//     },
//     // upsert: {
//     //   color: 'white',
//     // }
//   }
// }).then((res) => {
//   console.log(JSON.stringify(res, null, 2))
// }, (err) => {
//   console.log(JSON.stringify(err, null, 2))
// })

////////////////////////////////////////////////////
// Search String
// client.search({
//   index: 'shirts',
//   body: {   
//     query: {
//       query_string: {
//         query: 'elasticsearch'
//       }
//     }
//   }
// }).then((res) => {
//   console.log(JSON.stringify(res))
// },(err) => {
//     console.log(JSON.stringify(err))
//   })

///////////////////////////////////////////////////////
// Search Some Aggregation

// client.search({
//   index: 'shirts',
//   type: 'shirt',
//   body: {
//     query: {
//       bool: {
//         filter: [
//           {
//             bool: {
//               should: [
//                 { term: { size: 'L' } },
//                 { term: { size: 'S' } }

//                 // {
//                 //   query: {
//                 //     bool: {
//                 //       filter: [
//                 //         { term: { size: 'L' } }
//                 //       ]
//                 //     }
//                 //   }
//                 // },
//                 // {
//                 //   query: {
//                 //     bool: {
//                 //       filter: [
//                 //         { term: { size: 'S' } }
//                 //       ]
//                 //     }
//                 //   }
//                 // }
//               ]
//             }
//           },
//           {
//             term: {color: 'red'}
//             // bool: {
//             //   filter: [
//             //     {term: {color: 'red'}}
//             //   ]
//             // }
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

//////////////////////////////////////
// client.index({
//     index: 'abc',
//     type: '_doc',
//     id: 'abc123',
//     body: {
//         "name_ABC": "tshirt",
//         "size": "S",
//         "color": "red",
//         "fabric": "cotton abc xyz",
//         "price": 1000
//     }
// }).then((res) => {
//     console.log(res.result)
// })

/////////////////////////////////////////
// sear Aggregation
// client.search({
//   index: 'products',
//   body: {

//     "query": {
//       "match_all":{}
//     },
//     "aggs": {

//       "options": {
//         "nested": {
//           "path": "options",          
//         },        
//         aggs: {
//           key: {

//             terms: {
//               field: "options.key",
//               size: 100,
//             },
//             aggs: {
//               value: {
//                 terms: {
//                   field: "options.value",
//                   size: 100,
//                 }
//               }
//             }
//           }
//         }
//         // "terms": {
//         //   "field": "size"
//         // }
//       },
//       // "color": {
//       //   "terms": {
//       //     "field": "color"
//       //   }
//       // }
//     }

//   }

// }).then((res) => {
//   console.log(JSON.stringify(res, null, 2))
// }, (err) => {
//   console.log(JSON.stringify(err, null, 2))
// })
//////////////////////////////////////////
// client.create({
//   index: "stores",
//   type: "_doc",
//   id: 2823,
//   body: {
//     status: "S_ACTIVE",
//     locale: "chuaco",
//     updated_at: 1527681498,
//     shop_type: "SHOPIFY",
//     plan: "chuaco",
//     shop_owner: "Chua co",
//     id: 2823,
//     created_at: 1524037227,
//     shop_name: "radushoping.myshopify.com",
//     primary_email: "chuaco@chuaco.com",
//     email: "chuaco@chuaco.com"
//   }
// }).then((res) => {
//   console.log(res.result)
//   console.log(JSON.stringify(res, null, 2))
// })


// client.search({
//     index: 'shirts',
//     body: {
//         _source: true,
//         // from: 0, size: 10,
//         // sort: [{ ratingNumble: 'desc' }],
//         query: {
//             bool: {
//                 // must: {
//                 //     match_all: {}
//                 // },
//                 filter: [
//                     {
//                         term: { 'size.keyword': 'S' }
//                     },
//                     {
//                         term: { "color.keyword": 'red' }
//                     }
//                 ]
//             }


//         }
//     }
// }).then((res) => {
//     console.log(JSON.stringify(res, null, 2))
// })

// Tao index
// client.indices.create({
//     index: 'ENDPOINT'
// }, function(err, resp, status) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("create", resp);
//     }
// });

// Add product
// client.index({
//     index: 'product-comment',
//     // id: '1',    // Neu k co thi elastic se tu sinh
//     type: 'comment',
//     body: {

//         "createdAt": Date.now(),
//         "productId": 3,
//         "comment": "aklsjkasdj",
//         "rating": 8
//     }
// }, function(err, resp, status) {comment
//     console.log(JSON.stringify(resp, null, 2));
// });


// client.search({
//     index: 'order',
//     // type: 'posts',
//     // q: 'PostBody: elasticsearch your'
//     body: {
//         query: {
//             match = {
//                 PostBody = 'elasticsearch your'
//                 // PostType = 'Tutorial'
//             }            
//         }
//     }
// }).then(function(resp) {
//     console.log(resp);
//     console.log(resp.hits.hits[0])
// }, function(err) {
//     console.trace(err.message);
// });


// elaticsearch n gram
