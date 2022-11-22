const { AuthenticationError } = require('apollo-server-express');
const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolver = {
    Query: {
        me: async () => {
            const fakeId = '63799fa8fd00ed880b593d51';            
            return await User.findOne(
                {_id: fakeId}
            )
            .populate('cart')
            .populate('boughtItems')
            .populate('saleItems')
            .populate('soldItems');
        },        
        // me: async (parent, args, context) => {
        //     if (context.user) {
        //         return await User.findOne(
        //             {_id: context.user._id}
        //         )
        //         .populate('cart')
        //         .populate('boughtItems')
        //         .populate('saleItems')
        //         .populate('soldItems');
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },
        items: async () => {
            return await Item.find({});
        },
        item: async (parent, { itemId }) => {
            return Item.findOne({ _id: itemId });
        },
    },
    Mutation: {
        // addUser: async (parent, args) => {
        //     const user = await User.create(args);
        //     const token = signToken(user);
        //     return { token, user };
        // },
        // login: async (parent, { email, password }) => {
        //     const user = await User.findOne({ email });
        //     if (!user) {
        //         throw new AuthenticationError('Email not found');
        //     }
        //     const pwd = await user.isCorrectPassword(password);
        //     if (!pwd) {
        //         throw new AuthenticationError('Password incorrect');
        //     }
        //     const token = signToken(user);
        //     return { token, user };
        // },
        addItemToSale: async (parent, args) => {
            
                const item = await Item.create(args);
                const fakeId = '63799fa8fd00ed880b593d51';
                return await User.findOneAndUpdate(
                    { _id: fakeId },
                    { $push: { saleItems: item._id } },
                    { new: true }
                );
            
        },
        // addItemToSale: async (parent, args, context) => {
        //     if (context.user) {
        //         const item = await Item.create(args);
        //         return await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { saleItems: item._id } },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },    
        updateItemToSale: async (parent, args) => {
            const fakeItemId = '63799fa8fd00ed880b593d55';
            return await Item.findOneAndUpdate(
                { _id: fakeItemId },
                {
                    author: args.author,
                    title: args.title,
                    description: args.description,
                    price: args.price,
                    image: args.image
                },
                { new: true }
            );
        },
        // updateItemToSale: async (parent, args, context) => {
        //     if (context.user) {
        //         return await Item.findOneAndUpdate(
        //             { _id: args._id },
        //             {
        //                 author: args.author,
        //                 title: args.title,
        //                 description: args.description,
        //                 price: args.price,
        //                 image: args.image
        //             },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },        
        deleteItemToSale: async (parent, { itemId }) => {
                await Item.findOneAndDelete({ _id: itemId });
                const fakeId = '63799fa8fd00ed880b593d51';
                return await User.findOneAndUpdate(
                    { _id: fakeId },
                    { $pull: { saleItems: itemId } },
                    { new: true }
                );
        },        
        // deleteItemToSale: async (parent, { itemId }, context) => {
        //     if (context.user) {
        //         await Item.findOneAndDelete({ _id: itemId });
        //         return await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $pull: { saleItems: itemId } },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },
        addBoughtItem: async (parent, { itemId }) => {
            const fakeId = '63799fa8fd00ed880b593d51';
            return await User.findOneAndUpdate(
                { _id: fakeId },
                { $push: { boughtItems: itemId } },
                { new: true }
            );
        },
        // addBoughtItem: async (parent, { itemId }, context) => {
        //     if (context.user) {
        //         return await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { boughtItems: itemId } },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },
        addSoldItem: async (parent, { itemId }) => {
            const fakeId = '63799fa8fd00ed880b593d51';
            return await User.findOneAndUpdate(
                { _id: fakeId },
                { $push: { soldItems: itemId } },
                { new: true }
            );
        },
        // addSoldItem: async (parent, { itemId }, context) => {
        //     if (context.user) {
        //         return await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { soldItems: itemId } },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },
        updateUser: async (parent, args) => {
            const fakeUserId = '63799fa8fd00ed880b593d51';
            return await User.findOneAndUpdate(
                { _id: fakeUserId },
                {
                    street: args.street,
                    zip: args.zip,
                    city: args.city,
                    state: args.state,
                    country: args.country
                },
                { new: true }
            );
        },
        // addToCart: async (parent, { itemId }, context) => {
        //     if (context.user) {
        //         return await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { cart: itemId }},
        //             { new: true }
        //         ).populate('cart');
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },
        addToCart: async (parent, { itemId }, context) => {
            const fakeId = '63799fa8fd00ed880b593d51';
            return await User.findOneAndUpdate(
                { _id: fakeId },
                { $push: { cart: itemId }},
                { new: true }
            ).populate('cart');
        },
        // deleteFromCart: async (parent, { itemId }, context) => {
        //     if (context.user) {
        //         return await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $pull: cart: itemId },
        //             { new: true }
        //         ).populate('cart');
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },
        deleteFromCart: async (parent, { itemId }, context) => {
            const fakeId = '63799fa8fd00ed880b593d51';
                return await User.findOneAndUpdate(
                    { _id: fakeId },
                    { $pull: { cart: itemId } },
                    { new: true }
                ).populate('cart');
        },
    }
};

module.exports = resolver;