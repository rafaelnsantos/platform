import { gql } from 'apollo-server-micro';

export default gql`
  directive @auth on FIELD_DEFINITION
  directive @checkOrigin on FIELD_DEFINITION

  type User {
    name: String
    domain: String
  }

  input RegisterInput {
    email: String!
    password: String!
    domain: String!
  }

  input PaymentInput {
    token: String!
    months: Int!
  }

  input CheckDomainInput {
    domain: String!
  }

  type Mutation {
    register(input: RegisterInput!): User
    payment(input: PaymentInput!): Boolean @checkOrigin
    checkDomain(input: CheckDomainInput!): Boolean!
  }

  type Query {
    me: User! @auth
  }
`;
