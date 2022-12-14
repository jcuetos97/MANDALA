import { gql } from "@apollo/client";

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

export const QUERY_ITEMS_BY_MEDIUM = gql`
  query itemsByMedium($medium: String!, $range:[Int]) {
   itemsByMedium(medium: $medium, range: $range) {
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