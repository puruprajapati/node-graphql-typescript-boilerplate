import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        test(input: String): String
    }

    type Mutation {
        test(input: String): String

    }

    type Subscription {
        test: String
    }

`;

export default typeDefs;
