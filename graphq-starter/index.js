// Step 1: Define a schema or type definitions

const { ApolloServer, gql } = require("apollo-server");

const teacherData = [
  {
    firstName: "Bob",
    lastName: "Maths",
  },
  {
    firstName: "Jane",
    lastName: "Algebra",
  },
  {
    firstName: "Dan",
    lastName: "Shape",
  },
  {
    firstName: "Bob",
    lastName: "Verb",
  },
  {
    firstName: "Jane",
    lastName: "Adjective",
  },
  {
    firstName: "Dan",
    lastName: "Similies",
  },
  {
    firstName: "Bob",
    lastName: "Venn",
  },
  {
    firstName: "Jane",
    lastName: "Atom",
  },
  {
    firstName: "Dan",
    lastName: "Scales",
  },
];

const roomData = [
  {
    number: 1,
    corridor: 1,
  },
  {
    number: 2,
    corridor: 1,
  },
  {
    number: 3,
    corridor: 1,
  },
  {
    number: 1,
    corridor: 2,
  },
  {
    number: 2,
    corridor: 2,
  },
  {
    number: 3,
    corridor: 2,
  },
  {
    number: 1,
    corridor: 3,
  },
  {
    number: 2,
    corridor: 3,
  },
  {
    number: 3,
    corridor: 3,
  },
];

const subjectData = [
  {
    topic: "Maths",
    rooms: [
      {
        number: 1,
        corridor: 1,
      },
      {
        number: 2,
        corridor: 1,
      },
      {
        number: 3,
        corridor: 1,
      },
    ],
    teachers: [
      {
        firstName: "Bob",
        lastName: "Maths",
      },
      {
        firstName: "Jane",
        lastName: "Algebra",
      },
      {
        firstName: "Dan",
        lastName: "Shape",
      },
    ],
  },
  {
    topic: "Science",
    rooms: [
      {
        number: 1,
        corridor: 2,
      },
      {
        number: 2,
        corridor: 2,
      },
      {
        number: 3,
        corridor: 2,
      },
    ],
    teachers: [
      {
        firstName: "Bob",
        lastName: "Venn",
      },
      {
        firstName: "Jane",
        lastName: "Atom",
      },
      {
        firstName: "Dan",
        lastName: "Scales",
      },
    ],
  },
  {
    topic: "English",
    rooms: [
      {
        number: 1,
        corridor: 3,
      },
      {
        number: 2,
        corridor: 3,
      },
      {
        number: 3,
        corridor: 3,
      },
    ],
    teachers: [
      {
        firstName: "Bob",
        lastName: "Verb",
      },
      {
        firstName: "Jane",
        lastName: "Adjective",
      },
      {
        firstName: "Dan",
        lastName: "Similies",
      },
    ],
  },
];

const typeDefs = gql`
  type Teacher {
    firstName: String
    lastName: String
  }

  type Room {
    number: Int
    corridor: Int
  }

  type Subject {
    topic: String
    rooms: [Room]
    teachers: [Teacher]
  }

  type Query {
    rooms: [Room]
    teachers: [Teacher]
    subject(topic: String!): Subject
    subjects: [Subject]
  }
`;

// schema should contain Query if any
// schema should contain Mutations if any
// schema should contain Subscriptions if any

// Step 2: Define your resolvers
const roomsResolver = () => {
  return roomData;
};
const teachersResolver = () => {
  return teacherData;
};
const subjectsResolver = () => {
  return subjectData;
};
const subjectResolver = (parent, args, context, info) => {
  const { topic } = args;
  return subjectData.find((a) => a.topic == topic);
};

const resolvers = {
  Query: {
    rooms: roomsResolver,
    teachers: teachersResolver,
    subjects: subjectsResolver,
    subject: subjectResolver,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
