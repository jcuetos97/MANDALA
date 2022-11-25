import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
	mutation updateUser($street: String!, $zip: String!, $city: String!, $state: String!, $country: String!) {
    updateUser(street: $street, zip: $zip, city: $city, state: $state, country: $country) {
      _id
      username
      email
      street
      city
      state
      country
      zip
    }
  }
`;

export const ADD_ITEM_TO_SALE = gql`
	mutation addItemToSale($author: String!, $title: String!, $description: String!, $price: Float!) {
    addItemToSale(author: $author, title: $title, description: $description, price: $price) {
      _id
      title
      author
      description
      price
      image
    }
  }
`;

export const DELETE_ITEM_TO_SALE = gql`
	mutation deleteItemToSale($itemId: ID!) {
  	deleteItemToSale(itemId: $itemId) {
    	_id
	    title
  	  author
    	description
	    price
  	  image
	  }
	}
`;

export const UPDATE_ITEM_TO_SALE = gql`
	mutation updateItemToSale($author: String!, $title: String!, $description: String!, $price: Float!) {
  	updateItemToSale(author: $author, title: $title, description: $description, price: $price) {
    	_id
    	title
    	author
  	  description
	    price
    	image
  	}
	}
`;

export const ADD_BOUGHT_ITEM = gql`
  mutation addBoughtItem($itemId: ID!) {
    addBoughtItem(itemId: $itemId) {
      _id
      title
      author
      description
      price
      image
    }
  }
`;

export const ADD_SOLD_ITEM = gql`
  mutation addSoldItem($itemId: ID!) {
    addSoldItem(itemId: $itemId) {
      _id
      title
      author
      description
      price
      image
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addToCart($itemId: ID!) {
    addToCart(itemId: $itemId) {
      _id
      username
      cart {
        _id
        title
        author
        description
        price
        image
      }
    }
  }
`;

export const DELETE_FROM_CART = gql`
  mutation deleteFromCart($itemId: ID!) {
    deleteFromCart(itemId: $itemId) {
      _id
      username
      cart {
        _id
        title
        author
        description
        image
        price
      }
    }
  }
`;

export const DELETE_ALL_FROM_CART = gql`
  mutation deleteAllFromCart {
    deleteAllFromCart {
      _id
      username
      cart {
        _id
        title
        author
        description
        price
        image
      }
    }
  }
`;