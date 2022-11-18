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
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        
        addItemToSale(author: String!, title: String!, description: String!, price: Float!, image: String): User
        deleteItemToSale(itemId: ID!): User
        updateItemToSale(author: String!, title: String!, description: String!, price: Float!, image: String): Item

        #addBoughtItem
        #addSoldItem
        #updateUser
        
    }
`;

module.exports = typeDefs;