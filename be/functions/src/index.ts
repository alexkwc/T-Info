import {ApolloServer, gql} from "apollo-server-cloud-functions";
import {https} from "firebase-functions";
import resolvers from "./resolvers/resolvers";

const typeDefs = gql`
    type User {
        firstName: String
        lastName: String
        email: String
    }
    type Query {
        users : [User]
    }
    type Mutation {
      addUser(firstName: String, lastName: String, email: String): User
    }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const handler = server.createHandler();

export const graphql = https.onRequest(handler as any);
