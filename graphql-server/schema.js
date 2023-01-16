const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

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
    customer: {
        type: CustomerType
    }
})

module.exports = new GraphQLSchema({

})