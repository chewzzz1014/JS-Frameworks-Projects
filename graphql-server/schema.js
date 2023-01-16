const axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

// data
/*
const customersData = [
    { id: '1', name: 'John', email: 'j@email.com', age: 35 },
    { id: '2', name: 'Quon', email: 'q@email.com', age: 32 },
    { id: '3', name: 'chewzzz', email: 'z@email.com', age: 20 },
]
*/

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
            async resolve(parentValue, args) {
                /*
                for (let i = 0; i < customersData.length; i++) {
                    if (customersData[i].id === args.id) {
                        return customersData[i]
                    }
                }*/
                const result = await axios.get(`http://localhost:3000/customers/${args.id}`)
                return result.data
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            async resolve(parentValue, args) {
                const result = await axios.get(`http://localhost:3000/customers`)
                return result.data
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // add customer using data provided through GraphQL ide
        addCustomer: {
            type: CustomerType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            async resolve(parentValue, args) {
                const result = await axios.post('http://localhost:3000/customers', {
                    name: args.name,
                    email: args.email,
                    age: args.age
                })
                return result.data
            }
        },
        deleteCustomer: {
            type: CustomerType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parentValue, args) {
                const result = await axios.delete(`http://localhost:3000/customers/${args.id}`)
                return result.data
            }
        },
        updateCustomer: {
            type: CustomerType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            async resolve(parentValue, args) {
                const result = await axios.patch(`http://localhost:3000/customers/${args.id}`, args)
                return result.data
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})