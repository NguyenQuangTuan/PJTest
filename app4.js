// Bat elaticsearch: sudo systemctl start elasticsearch
// Tao index: curl -XPUT 'localhost:9200/customer?pretty'
// Xem cac index: curl 'localhost:9200/_cat/indices?v'
// Xem suc khoe: curl 'localhost:9200/_cat/health?v'
// Xem node: curl 'localhost:9200/_cat/nodes?v'
// Xoa Index: curl -XDELETE 'localhost:9200/customer?pretty' -> customer la ten index
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

// client.search({
//     index: 'shirts',
//     body: {
//         query: {
//             term: {
//                 fabric: "cotton"
//             }
//         },
//         aggs: {
//             size: {
//                 terms: {
//                     field: "size"
//                 }
//             },
//             color: {
//                 terms: {
//                     field: "color"
//                 }
//             }
//         }
//     }

// }).then((res) => {
//     console.log(JSON.stringify(res, null, 2))
// })

client.create({
    index: "shirts",
    type: "shirt", 
    id: 5,
    body: {
        comment: 'abaksjfiodfj',
        ratingNumble: 3,
        productId: '1234',
        useId: '987654321',
        abc: 'asdfghjk'
    }
  }).then((res) => {
      console.log(res.result)
    // console.log(JSON.stringify(res,null,2))
})


// client.search({
//     index: 'shirts',
//     body: {
//         _source: true,
//         // from: 0, size: 10,
//         // sort: [{ ratingNumble: 'desc' }],
//         query: {
//             bool: {
//                 must: {
//                     match_all: {}
//                 },
//                 filter: [
//                     {
//                         term: { size: 'M' }
//                     },
//                     {
//                         term: { color: 'red' }
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
