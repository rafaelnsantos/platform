import { gql } from 'apollo-server-micro';

export default gql`
  directive @auth on FIELD_DEFINITION

  type User {
    name: String
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  input PaymentInput {
    uid: String!
    token: String!
    months: Int!
  }

  type Mutation {
    register(input: RegisterInput!): User
    payment(input: PaymentInput!): Boolean
  }

  type Query {
    me: User! @auth
  }
`;
