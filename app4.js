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
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});

// Tao index
client.indices.create({
    index: 'products'
}, function(err, resp, status) {
    if (err) {
        console.log(err);
    } else {
        console.log("create", resp);
    }
});

// Add product
// client.index({
//     index: 'order',
//     // id: '1',    // Neu k co thi elastic se tu sinh
//     type: 'posts',
//     body: {
//         "PostName": "789 Integrating Elasticsearch Into Your Node.js Application",
//         "PostType": "Tutorial 456",
//         "PostBody": "123 This is the text of our tutorial about using Elasticsearch in your Node.js application.",
//         "abc":"def"
//     }
// }, function(err, resp, status) {
//     console.log(resp);
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
