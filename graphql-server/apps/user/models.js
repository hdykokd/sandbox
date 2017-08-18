const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  age: {
    type: Number,
    default: 0,
  },
})

mongoose.connect('mongodb://localhost/local')

module.exports = mongoose.model('User', UserSchema)
