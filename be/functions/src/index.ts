/* eslint-disable max-len */
import {ApolloServer, gql} from "apollo-server-cloud-functions";
import {https} from "firebase-functions";
import resolvers from "./resolvers/resolvers";

const typeDefs = gql`
    scalar Date

    type Intel {
        reportBy: String!
        createdAt: Date!
        t1: Int!
        t2: Int!
        t3: Int!
        t4: Int!
        t5: Int!
        t6: Int!
        t7: Int!
        t8: Int!
        t9: Int!
        t10: Int!
        x: Int!
        y: Int!
    }
    type Query {
        intels: [Intel]
        intelsByLocation(x: Int!, y: Int!): [Intel]
    }
    type Mutation {
      reportIntel(reportBy: String!, t1: Int!, t2: Int!, t3: Int!, t4: Int!, t5: Int!, t6: Int!, t7: Int!, t8: Int!, t9: Int!, t10: Int!, x: Int!, y: Int!): Intel
    }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const handler = server.createHandler();

export const graphql = https.onRequest(handler as any);
