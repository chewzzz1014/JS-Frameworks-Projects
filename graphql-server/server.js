const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema')
const app = express()

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3001, () => {
    console.log('Listening at Port 3001')
})