import { gql } from "apollo-server";

export const typeDefs = gql`

    type Contact {
        _id: ID!,
        name: String!,
        last_name: String!,
        email: String!,
        phone: String!,
    }

    type Query {
        test: String!,
        AZcontacts: [Contact],
        ZAcontacts: [Contact]
    }

    type Mutation {
        addContact(name: String!, last_name: String!, email: String!, phone: String!): Contact!,
        deleteContact(_id: String!): Contact!,
        editContact(_id: String!, name: String, last_name: String, email: String, phone: String): Contact!
    }
`