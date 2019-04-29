import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
  {
    id: 1,
    name: 'Tiago',
    email: 'tiago.lima@email.com.br'
  },
  {
    id: 2,
    name: 'Ricardo',
    email: 'ricardo.lima@email.com.br'
  },
];

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => users
  }
}

export default makeExecutableSchema({typeDefs, resolvers});