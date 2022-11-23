import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser {
    User {
      _id
      User
      itemsUser
      createItemId
    }
  }
`;
