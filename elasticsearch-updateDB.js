var elasticsearch = require('elasticsearch')
var client = new elasticsearch.Client({
  host: '192.168.10.40:9200',
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

client.search({
  index: 'products',
  _source: true,
  q: 335153,
  
  // body: {
  //   aggs: {
  //     id: {
  //       terms: {
  //         field: 'id'
  //       }
  //     }
  //   }
  // }
}).then((res) => {
  arr = res.hits.hits
  let arrCharacter = []
  arrCharacter.push({key: /&#39;s/gi, value: "'"})

  res.hits.hits[0]._source.description = res.hits.hits[0]._source.description.replace(/<[^<]*>|\\[^]/gi, '')
  for(i=0; i<arrCharacter.length; i++){
    res.hits.hits[0]._source.description = res.hits.hits[0]._source.description.replace(arrCharacter[i].key, arrCharacter[i].value)
  }
  client.update({
    index: 'products',
    type: '_doc',
    id: res.hits.hits[0]._id,
    body: {
      doc: {
        description: res.hits.hits[0]._source.description
      }
    }
  })
  console.log(res)
})