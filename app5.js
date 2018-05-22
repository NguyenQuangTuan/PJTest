var jwt = require('jsonwebtoken')
var obj = {
    fullName: 'Tony',
    userId: '123abc'
}
var x = jwt.sign(obj, 'test')
console.log(x)