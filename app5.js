var jwt = require('jsonwebtoken')

var obj = {
    user_id: "S1T_Ew8Wm",
    full_name: "Giang Bạch",
}
var x = jwt.sign(obj, 'test')
console.log(x)


// var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSDFybG1BX3pYIiwiZW1haWwiOiJ0cmFudHVhbmFuMDgxMjE5OTZAZ21haWwuY29tIiwiZnVsbF9uYW1lIjoiVHLhuqduIFR14bqlbiBBbiIsImlhdCI6MTUzMDczNzY4NywiZXhwIjoxNTMxOTQ3Mjg3fQ.XssiM_ZdN-kYd6wMFIAziImseGI2kgPXq2mUbLZqoQE'
// jwt.verify(token, 'test', function (err, decoded) {
//     if (err) console.log(err)

//     console.log(JSON.stringify(decoded, null, 2))

// })

