import { gql } from 'apollo-server-micro';

export default gql`
  directive @auth on FIELD_DEFINITION
  directive @checkOrigin on FIELD_DEFINITION

  type User {
    name: String
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  input PaymentInput {
    token: String!
    months: Int!
  }

  type Mutation {
    register(input: RegisterInput!): User
    payment(input: PaymentInput!): Boolean @checkOrigin
  }

  type Query {
    me: User! @auth
  }
`;
