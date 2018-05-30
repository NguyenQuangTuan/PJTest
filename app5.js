var jwt = require('jsonwebtoken')
var obj = {
    myshopifyShopDomain: 'tuannq.com'
}
var x = jwt.sign(obj, 'test')
console.log(x)