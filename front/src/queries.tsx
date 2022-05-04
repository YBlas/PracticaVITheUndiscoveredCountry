import { gql } from "@apollo/client";

export const GET_ALL_USERS_AZ = gql`
    query Query {
        AZcontacts {
            _id
            name
            last_name
            email
            phone
        }
    }
`
export const GET_ALL_USERS_ZA = gql`
    query Query {
        ZAcontacts {
            _id
            name
            last_name
            email
            phone
        }
    }
`

export const ADD_CONTACT = gql`
    mutation AddContact($name: String!, $lastName: String!, $email: String!, $phone: String!) {
        addContact(name: $name, last_name: $lastName, email: $email, phone: $phone) {
            _id
            name
            last_name
            email
            phone
        }
    }
`

export const DELETE_CONTACT = gql`
    mutation DeleteContact($_id: String!) {
        deleteContact(_id: $_id) {
            _id
            name
            last_name
            email
            phone
        }
    }
`

export const UPDATE_CONTACT = gql`
    mutation EditContact($_id: String!, $name: String, $lastName: String, $email: String, $phone: String) {
        editContact(_id: $_id, name: $name, last_name: $lastName, email: $email, phone: $phone) {
            _id
            name
            last_name
            email
            phone
        }
    }
`