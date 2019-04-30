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
  {
    id: 3,
    name: 'Cesar',
    email: 'cesar.silva@email.com.br'
  },
];

const cars: any[] = [
  {
    id: 1,
    name: 'GM',
    model: 'Astra'
  },
  {
    id: 2,
    name: 'Honda',
    model: 'Civic'
  },
  {
    id: 3,
    name: 'Peugeot',
    model: '307'
  },
];

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Cars {
    id: ID!
    name: String!
    model: String!
  }

  type Query {
    allUsers: [User!]!,
    allCars: [Cars!]!,
  }
`;

const resolvers = {
  Query: {
    allUsers: () => users,
    allCars: () => cars,
  }
}

export default makeExecutableSchema({typeDefs, resolvers});