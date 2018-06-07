var jwt = require('jsonwebtoken')
var obj = {
    userId: 'rJQ6qEWJX'
}
var x = jwt.sign(obj, 'test')
console.log(x)