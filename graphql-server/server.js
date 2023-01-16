const express = require('express')
const expressGraphQL = require('express-graphql')
const app = express()

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphql: true
}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3001, () => {
    console.log('Listening at Port 3001')
})