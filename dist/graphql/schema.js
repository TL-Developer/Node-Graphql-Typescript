"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
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
const cars = [
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

  type Car {
    id: ID!
    name: String!
    model: String!
  }

  type Query {
    allUsers: [User!]!,
    allCars: [Car!]!,
  }

  type Mutation {
    createUser(name: String!, email: String!): User,
    createCar(name: String!, model: String!): Car
  }
`;
const resolvers = {
    User: {
        id: user => user.id,
        name: user => user.name,
        email: user => user.email,
    },
    Query: {
        allUsers: () => users,
        allCars: () => cars,
    },
    Mutation: {
        createUser: (parent, args, context, info) => {
            const newUser = Object.assign({ id: users.length + 1 }, args);
            users.push(newUser);
            return newUser;
        },
        createCar: (parent, args, context, info) => {
            const newCar = Object.assign({ id: cars.length + 1 }, args);
            cars.push(newCar);
            return newCar;
        }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
