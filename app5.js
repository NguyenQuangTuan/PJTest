var jwt = require('jsonwebtoken')
var obj = {
    myshopifyShopDomain: 'tuanloantuzki',
    appsInfo: {
        SALES_POP: {
            isInstalled: true
        }
    }
}
var x = jwt.sign(obj, 'test')
console.log(x)