import GraphQLSchema from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import ApiSchema from './api.schema';
import {AuthSchema, AuthResolver} from '../modules/auth';

/** import { GraphQLResolveInfo } from 'graphql';
import { Context } from './models';
import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_: void, args: void, ctx: Context, info: GraphQLResolveInfo): string {
            return `👋 Hello world! 👋`;
        },
    },
};

export default resolverMap; */


const typeDefs = [
    ApiSchema,
    AuthSchema,
];

const resolvers = [
    AuthResolver,
];


const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
