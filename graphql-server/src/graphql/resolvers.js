import {ObjectId} from 'mongodb'

const Users = require('../../apps/user/models')

const resolvers = {
  Query: {
    hello(root, args, context) {
      return 'Hello world!'
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

module.exports = {resolvers}
