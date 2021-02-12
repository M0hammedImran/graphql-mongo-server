import { gql } from 'apollo-server';

export const typeDefs = gql`
  type book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [book]
    book(id: ID!): book
  }

  type Mutation {
    addBook(title: String!, author: String!): book!
  }
`;
