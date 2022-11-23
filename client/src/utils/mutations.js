import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      email
      password
       
    }
  }
`;
