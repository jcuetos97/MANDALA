const { AuthenticationError } = require('apollo-server-express');
const { User, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolver = {
    Query: {
        me: async () => {
            const fakeId = '637668f531027ec63cec3f11';            
            return await User.findOne(
                {_id: fakeId}
            )
            .populate('boughtItems')
            .populate('saleItems')
            .populate('soldItems');
        },        
        // me: async (parent, args, context) => {
        //     if (context.user) {
        //         return await User.findOne(
        //             {_id: context.user._id}
        //         )
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
                const fakeId = '637668f531027ec63cec3f11';
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
            const fakeItemId = '63767f6ba3d552ca76c400b9';
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
                const fakeId = '637668f531027ec63cec3f11';
                return await User.findOneAndUpdate(
                    { _id: fakeId },
                    { $pull: { saleItems: itemId } },
                    { new: true }
                );
        },        
        // deleteItemToSale: async (parent, { itemId }, context) => {
        //     if (context.user) {
        //         Item. findOneAndDelete({ _id: itemId });
        //         return User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $pull: { saleItems: itemId } },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You need to be logged in');
        // },
    }
};

module.exports = resolver;