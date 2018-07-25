const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'test',
  'root',
  '1',
  {
    username: 'root',
    password: '1',
    database: 'test',
    host: 'localhost',
    dialect: 'mysql'
  }
)
let Test = sequelize.import('./test')
let Test2 = sequelize.import('./test2')

// sequelize.sync()

// create = function (name, callback) {
//     Test.create(name)
//         .then(res => {
//             callback(null, res)
//             return (null)
//         })
//         .catch(err => {
//             callback(err, null)
//             return (null)
//         })
// }

// create2 = function (name, callback) {
//     Test2.create(name)
//         .then(res => {
//             callback(null, res)
//             return (null)
//         })
//         .catch(err => {
//             callback(err, null)
//             return (null)
//         })
// }

const test = async function () {
    let transaction = await sequelize.transaction()
    console.log('')

    try {
        let name =  Test.create({ name: 'tuan1' }, { transaction })
        console.log('name - 1 : ' + name)
        let name2 = Test2.create({ name: 'loan1' }, { transaction })
        console.log('name2 - 1 :' + name2)

        await name
        console.log('name - 2 : ' + name)
        await name2
        console.log('name2 - 2 : ' + name2)

        let x = await transaction.commit()
        console.log(x)
    }
    catch (err) {
        await transaction.rollback()
        console.log(err)
    }
}

test()

// Test
//   .update({ name: 'loan' }, {
//     where: {
//       ids: 9
//     }
//   })
//   .then(res => {
//     if (res.every((val) => {
//       return val == 1
//     })) {
//       console.log('true')
//     } else {
//       console.log('false')
//     }
//   })
//   .catch(err => {
//     console.log('err')
//   })