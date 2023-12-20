const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { readFileSync } = require('fs')

const typeDefs = [
    readFileSync('./graphql/typedefs.gql').toString()
]
const resolvers = [
    require('./resolvers')
]

const schema = makeExecutableSchema({typeDefs, resolvers})

module.exports = graphqlHTTP({
    schema: schema,
    graphiql: {
        headerEditorEnabled: true
    }
})