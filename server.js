const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}))

app.listen(4000, () => {
  console.log('listening on localhost:4000')
  console.log('You can start running json-server in another terminal by running: "npm run josn:server"')
})
