const elasticsearch = require('elasticsearch')
const async = require('async')
const underscore = require('underscore')

const client = elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

const client2 = elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

async.waterfall([
  cb => {
    client.search({
      index: 'products_backup',
      size: 100,
      body: {
        query: {
          match_all: {}
        }
      }
    })
      .then(res => {
        let products = res.hits.hits
        for (let i = 0; i < products.length; i++) {
          products[i] = products[i]._source

          delete products[i].variants
          delete products[i].item_info
          delete products[i].images
          delete products[i].description

          products[i].tag = []

          let new_options = []
          products[i].options.forEach(option => {
            underscore.pick(option, (values, key, object) => {
              values.forEach(value => {
                new_options.push({ key: key, value: value })
              })
            })

          });
          products[i].options = new_options
        }

        cb(null, products)
      }, (err) => {
        console.log('false----')
        cb(err)
      })
      
  },
  (products, cb) => {
    products.forEach(product => {
      client2.create({
        index: 'products',
        type: '_doc',
        id: product.product_id,
        body: product
      })
      .then((res) => {
        cb(null, null)
      }, (err) => {
        cb(err)
      })
    })
  }
], (err, res) => {
  if (err) console.log(err)
  else console.log(res)
})