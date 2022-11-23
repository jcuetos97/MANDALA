const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String   
        street: String
        zip: String
        city: String
        state: String
        country: String
        cart: [Item]
        boughtItems: [Item]
        saleItems: [Item]
        soldItems: [Item]
        soldCount: Int
    }

    type Item {
        _id: ID
        author: String
        title: String
        description: String
        price: Float
        image: String        
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        items: [Item]
        item(itemId: ID!): Item
        #item por tag || descr || title || author
        
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth        
        login(email: String!, password: String!): Auth

        updateUser(street: String!, zip: String!, city: String!, state: String!, country: String!): User
        
        addItemToSale(author: String!, title: String!, description: String!, price: Float!, image: String): Item
        deleteItemToSale(itemId: ID!): Item
        updateItemToSale(author: String!, title: String!, description: String!, price: Float!, image: String): Item

        addBoughtItem(itemId: ID!): Item
        addSoldItem(itemId: ID!): Item
        addToCart(itemId: ID!): User
        deleteFromCart(itemId: ID!): User

    }
`;

module.exports = typeDefs;