import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($name: String!) {
    user(name: $name) {
      id
      name
      email
      photoURL
      phoneNumber
      address
      password
    }
  }
`;
