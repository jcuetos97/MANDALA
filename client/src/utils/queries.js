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
              description
              medium
              image
              price
              title
            }
            saleItems {
              author
              description
              medium
              image
              price
              title
            }
            soldItems {
              _id
              description
              medium
              image
              price
              title
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
            medium
            price
            image
        }
    }
`;


// export const QUERY_ITEMS_BY_MEDIUM = gql`
//     query MediumItems($medium: String!) {
//         mediumItems(medium: $medium) {
//             _id
//             title
//             author
//             description
//             medium
//             price
//             image
//         }
//     }
// `;

export const QUERY_SINGLE_ITEM = gql `
    query singleItem($itemId: ID!) {
        item(itemId: $itemId) {
            _id
            title
            author
            description
            medium
            price
            image
        }
    }
`;

export const QUERY_CART_ITEMS = gql`
  query CartItems {
    cartItems {
        cart {
          _id
          title
          author
          description
          medium
          price
          image
        }
    }
  }
`;