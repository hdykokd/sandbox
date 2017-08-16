const {graphqlExpress, graphiqlExpress} = require('graphql-server-express')
const bodyParser = require('body-parser')
const {makeExecutableSchema} = require('graphql-tools')
const express = require('express')

const typeDefs = require('./graphql/type-defs')
const {resolvers} = require('./graphql/resolvers')

const server = express()

const schema = makeExecutableSchema({typeDefs, resolvers})

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
  })
)

server.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))

server.listen(4000, err => {
  if (err) throw err
  console.log('Ready on http://localhost:4000')
})
