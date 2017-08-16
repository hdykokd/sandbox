const resolvers = {
  Query: {
    hello(root) {
      return 'world'
    },
  },
}

module.exports = {resolvers}
