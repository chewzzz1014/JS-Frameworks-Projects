const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

// data
const customersData = [
    { id: '1', name: 'John', email: 'j@email.com', age: 35 },
    { id: '2', name: 'Quon', email: 'q@email.com', age: 32 },
    { id: '3', name: 'chewzzz', email: 'z@email.com', age: 20 },
]

// customer type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})


// root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                for (let i = 0; i < customersData.length; i++) {
                    if (customersData[i].id === args.id) {
                        return customersData[i]
                    }
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})