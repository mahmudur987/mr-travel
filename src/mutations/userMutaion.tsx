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
