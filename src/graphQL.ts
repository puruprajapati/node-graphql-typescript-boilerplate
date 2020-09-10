import GraphQLSchema from 'graphql';
import {ApolloServer} from 'apollo-server-express';
import * as depthLimit from 'graphql-depth-limit';
import errorMiddleWare from './api/middlewares/error.middleware';

class GraphQLServer {
    public schema: GraphQLSchema;
    public graphQLServer: ApolloServer;

    constructor(schema: GraphQLSchema) {
        this.schema = schema;
        this.configApolloServer();
    }

    configApolloServer() {
        this.graphQLServer = new ApolloServer({
            schema: this.schema,
            validationRules: [depthLimit(5)],
            // cors: true,
            context: ({req, connection}) => {

                if (connection) {
                    return connection.context;
                }
                const token = req.headers.authorization || '';
                const client = req.headers.client || '';
                const context = {client};

                return {...context};

            },
            formatError: (error: any) => {
                const formattedError = errorMiddleWare(error) || error;

                return {
                    message: formattedError.message,
                    code: formattedError.code || 400
                };
            },
            playground: (process.env.NODE_ENV === 'production') ? true : true
        })

    }

    applyMiddleware(expressApp: any, routePath: string) {
        this.graphQLServer.applyMiddleware({app: expressApp, path: routePath})
    }
}

export default GraphQLServer;
