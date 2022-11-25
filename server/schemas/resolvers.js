const { AuthenticationError } = require('apollo-server-express');
const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolver = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne(
                    { _id: context.user._id }
                )
                .populate('cart')
                .populate('boughtItems')
                .populate('saleItems')
                .populate('soldItems');
            }
            throw new AuthenticationError('You need to be logged in');
        },
        items: async () => {
            return await Item.find({});
        },
        item: async (parent, { itemId }) => {
            return Item.findOne({ _id: itemId });
        },
        cartItems: async (parent, args, context) => {
            if (context.user) {
                return await User.findOne(
                    { _id: context.user._id }
                ).populate('cart');
            }
            throw new AuthenticationError('You need to be logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Email not found');
            }
            const pwd = await user.isCorrectPassword(password);
            if (!pwd) {
                throw new AuthenticationError('Password incorrect');
            }
            const token = signToken(user);
            return { token, user };
        },
        addItemToSale: async (parent, args, context) => {
            if (context.user) {
                const item = await Item.create(args);
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { saleItems: item._id } },
                    { new: true }
                );
                return item; 
            }
            throw new AuthenticationError('You need to be logged in');
        },
        updateItemToSale: async (parent, args, context) => {
            if (context.user) {
                return await Item.findOneAndUpdate(
                    { _id: args._id },
                    {
                        author: args.author,
                        title: args.title,
                        description: args.description,
                        price: args.price,
                        image: args.image
                    },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in');
        },
        deleteItemToSale: async (parent, { itemId }, context) => {
            if (context.user) {
                const item = await Item.findOneAndDelete({ _id: itemId });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { saleItems: itemId } },
                    { new: true }
                );
                return item;
            }
            throw new AuthenticationError('You need to be logged in');
        },
        addBoughtItem: async (parent, { itemId }, context) => {
            if (context.user) {
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { boughtItems: itemId } },
                    { new: true }
                );
                return Item.findOne({ _id: itemId });
            }
            throw new AuthenticationError('You need to be logged in');
        },
        addSoldItem: async (parent, { itemId }, context) => {
            if (context.user) {
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { soldItems: itemId } },
                    { new: true }
                );
                console.log(itemId);
                return Item.findOne({ _id: itemId });
            }
            throw new AuthenticationError('You need to be logged in');
        },        
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        street: args.street,
                        zip: args.zip,
                        city: args.city,
                        state: args.state,
                        country: args.country
                    },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in');           
        },        
        addToCart: async (parent, { itemId }, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { cart: itemId }},
                    { new: true }
                ).populate('cart');
            }
            throw new AuthenticationError('You need to be logged in');
        },       
        deleteFromCart: async (parent, { itemId }, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { cart: itemId } },
                    { new: true }
                ).populate('cart');
            }
            throw new AuthenticationError('You need to be logged in');
        },
        deleteAllFromCart: async (parent, args, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context.user },
                    { $set: { cart: [] } },
                    { new: true }
                ).populate('cart');
            }
            throw new AuthenticationError('You need to be logged in');
        }
    }
};

module.exports = resolver;