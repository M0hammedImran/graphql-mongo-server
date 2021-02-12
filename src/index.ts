import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolver';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 5555 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
