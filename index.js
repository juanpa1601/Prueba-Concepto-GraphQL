const { createServer } = require('@graphql-yoga/node')
const { loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typeDefs = loadSchemaSync('./schemas.graphql', { loaders: [new GraphQLFileLoader()] });
const resolvers = require('./resolvers');

const db = require('./db');

const schema = makeExecutableSchema({ 
    typeDefs,
    resolvers
});

const dbConnection = db.connectDB();

const server = createServer({ schema });

dbConnection.then(() => {
    console.log('Connected to DB')
    server.start({ port: 4000 }, () => {
        console.log('Server is running on http://localhost:4000')
    })
}).catch((err) => {
    console.log('Error connecting to DB: ', err)
})