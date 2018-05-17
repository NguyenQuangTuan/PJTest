var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('oke')
});

var kittySchema = mongoose.Schema({
  name: String
}, {timestamps: true});



kittySchema.index( {expireAfterSeconds: 30});
//{createdAt: -1},

// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

 var Kitten = mongoose.model('Kitten', kittySchema);

Kitten.collection.dropIndex('expireAfterSeconds_30', function(err, result) {
  if (err) {
      console.log('Error in dropping index!', err);
  }
});

// //Kitten.createIndex({createAt: 1}, {expireAfterSeconds: 30})

// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.save(function(err, fluffy){
  if(err) return console.error(err)
  console.log('save ok')
})


// fluffy.speak(); // "Meow name is fluffy"

// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
//   console.log('oke')
// });

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })