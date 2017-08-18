const User = require('./models')

exports.createUser = (name, age, cb) => {
  User.create({name, age}, err => {
    if (err) return cb(err)
    console.log('user created')
  })
}
