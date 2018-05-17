var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client()

var arrayObj = [
    {
        id: 12,
        array: [
            {array11: '1array11'},
            {array12: '1array12'}
        ]
    },
    {
        id: 22,
        array: [
            {array21: '1array21'},
            
        ]
    }
]


client.index({
    index: "tests",
    type: "test",
    body: {
      mappings: {
        test: {
          properties: {
            id: { type: "id" }
          },
        },
      },
    },
  })

// client.index({
//     index: 'tests',
//     type: 'test',
//     body: {
//         arrayObj
//     }
//   }, function (error, response) {
//     if(error) console.log(error)
//     if(response) console.log('create ok')
//   });

//   client.search({
//         index: 'tests',
//         // type: 'posts',
//         // q: 'PostBody: elasticsearch your'
//         body: {
//             query: {
//                 match = {
//                     PostBody = 'elasticsearch your'
//                     // PostType = 'Tutorial'
//                 }            
//             }
//         }
//     }).then(function(resp) {
//         console.log(resp);
//         console.log(resp.hits.hits[0])
//     }, function(err) {
//         console.trace(err.message);
//     });