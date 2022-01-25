// Step 1: Define a schema or type definitions

const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Author {
    firstName: String
    lastName: String
  }

  type Book {
    id: String
    title: String
    author: Author
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

// schema should contain Query if any
// schema should contain Mutations if any
// schema should contain Subscriptions if any

// Step 2: Define your resolvers
const booksResolver = () => {};
const authorResolver = () => {};

const resolvers = {
  Query: {
    books: () => booksResolver,
    authors: () => authorResolver,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
