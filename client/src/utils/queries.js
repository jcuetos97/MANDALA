import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            street
            city
            state
            country
            zip
            cart {
              _id
            }
            boughtItems {
              _id
            }
            saleItems {
              _id
            }
            soldItems {
              _id
            }
          }
        }
    }
`;

export const QUERY_ITEMS = gql`
    query allItems {
        items {
            _id
            title
            author
            description
            price
            image
        }
    }
`;

export const QUERY_SINGLE_ITEM = gql `
    query singleItem(itemId: ID!) {
        item(itemId: $itemId) {
            _id
            title
            author
            description
            price
            image
        }
    }
`;