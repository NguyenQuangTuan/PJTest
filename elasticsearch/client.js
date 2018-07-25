const elasticsearch = require('elasticsearch')

// REF: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html

const Elasticsearch = function() {
  this.client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  })
  this.client.indices.create({
    index: 'test',
    body: {
        settings: {
            "number_of_shards": 1
        },
        mapping: {
            house: {
                name: {
                    type: 'long'
                }
            }
        }
    }
});

  return this
}

module.exports = Elasticsearch