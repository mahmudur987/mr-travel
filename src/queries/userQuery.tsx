import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($email: String!) {
    user(email: $email) {
      id
      name
      email
      photoURL
      phoneNumber
      address
      password
      role
    }
  }
`;
export const USERS = gql`
  {
    users {
      id
      name
      email
      photoURL
      phoneNumber
      address
      password
      role
    }
  }
`;
