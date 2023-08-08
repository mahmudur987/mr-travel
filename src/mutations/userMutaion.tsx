import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $name: String!
    $email: String!
    $phoneNumber: String!
    $address: String!
    $photoURL: String!
    $password: String!
  ) {
    addUser(
      name: $name
      email: $email
      phoneNumber: $phoneNumber
      address: $address
      photoURL: $photoURL
      password: $password
    ) {
      name
      email
    }
  }
`;
export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $phoneNumber: String!, $address: String!) {
    updateUser(id: $id, phoneNumber: $phoneNumber, address: $address) {
      id
      name
      email
      phoneNumber
      address
    }
  }
`;
export const REMOVE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
      phoneNumber
      address
    }
  }
`;
