var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client({
  host: '192.168.10.40',
  
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

// search multi_match
client.search({
  index: 'products',
  body: {
    query: {
      multi_match : {
          query : 'guide',
          fields : [_all]
      }
  }
  }
}).then((res) => {
  console.log(JSON.stringify(res))
}, (err) => {
  console.log(JSON.stringify(err))
})

// search filtered => chua duoc
// client.search({
//   index: 'shirts',
//   body: {
//     query: {
//       filtered: {
//         query: {
//           match: {
//             name: "tshirt"
//           }
//         },
//         filter: {
//           term: {
//             color: "red"
//           }
//         }
//       }
//     }
//   }
// }).then((res) => {
//   console.log(JSON.stringify(res))
// }, (err) => {
//   console.log(JSON.stringify(err))
// })
