const PORT = 3000

const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const cors = require('cors')

const {makeExecutableSchema} = require('graphql-tools')

const typeDefs = require('./graphql/type-defs')
const {resolvers} = require('./graphql/resolvers')

const schema = makeExecutableSchema({typeDefs, resolvers})

const server = express()

server.use('/graphi', express.static(`${__dirname}/public`))
server.use(
  '/graphql',
  cors(),
  graphqlHttp({
    schema,
    graphiql: true,
  })
)

server.listen(PORT)
console.log(`Ready on http://localhost:${PORT}`)
