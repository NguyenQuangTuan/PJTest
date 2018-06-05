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

client.search({
  index: 'shirts',
  body: {
    "query": {
      "filtered": {
        "query": {
          "match": {
            "title": "shirt"
          }
        },
        "filter": {
          "term": {
            "color": "red"
          }
        }
      }
    }
  }
}).then((res) => {
  console.log(JSON.stringify(res))
}, (err) => {
  console.log(JSON.stringify(err))
})
