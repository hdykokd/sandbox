import {ObjectId} from 'mongodb'

const Users = require('../../apps/user/models')

const resolvers = {
  Query: {
    hello(root) {
      return 'world'
    },
    user(root, {_id}) {
      return Users.findOne(ObjectId(_id))
        .then(user => {
          return user
        })
        .catch(err => {
          return err
        })
    },
    users(root) {
      return Users.find({})
        .then(users => {
          return users
        })
        .catch(err => {
          return err
        })
    },
  },
}

console.log(resolvers)
module.exports = {resolvers}
