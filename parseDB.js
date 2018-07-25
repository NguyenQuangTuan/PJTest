// const elasticsearch = require('elasticsearch')

// const client = new elasticsearch.Client({
//   host: '192.168.10.40:9200',
//   log: 'trace'
// })

// index = 'products'
// type = '_doc'
// client.search({
//   index: index,
//   q: '335169',

//   // body: {
//   //   from: 0,
//   //   size: 100,
//   //   query: {
//   //     match_all: {}
//   //   }
//   // }
// }).then((res) => {
//   let product = res.hits.hits[0]._source
//   product = modifyDB(product)
//   console.log(JSON.stringify(product, null, 2))
// })
 
// Product
const modifyDB = function (obj) {
  obj.product_id = obj.productId
  delete obj.productId

  obj.store_id = obj.storeId
  delete obj.storeId

  obj.item_info = obj.itemInfo
  delete obj.itemInfo

  obj.created_at = obj.createdAt
  delete obj.createdAt

  obj.updated_at = obj.updatedAt
  delete obj.updatedAt

  obj.total_rating = obj.totalRating
  delete obj.totalRating

  obj.total_review = obj.totalReview
  delete obj.totalReview

  obj.rating_average = obj.ratingAverage
  delete obj.ratingAverage

  return obj
}

module.exports = modifyDB