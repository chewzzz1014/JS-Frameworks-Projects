const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

// data
const customers = [
    { id: '1', name: 'John', email: 'j@email.com', age: 35 },
    { id: '2', name: 'Quon', email: 'q@email.com', age: 32 },
    { id: '3', name: 'chewzzz', email: 'z@email.com', age: 20 },
]

// customer type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    field: () => ({
        id: { tpye: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})


// root query
const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    field: {
        customer: {
            type: CustomerType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                customers.filter(c => c.id === args.id)
            }
        }
    },
})

module.exports = new GraphQLSchema({
    query: rootQuery
})