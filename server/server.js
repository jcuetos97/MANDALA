const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const cors = require('cors');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});


app.use(cors());
app.use('/', require('./routes/uploadImage'));


// This is the checkout session
require('dotenv').config();
const secretkey = (process.env.secret);
const stripe = require("stripe")(secretkey);
const YOUR_DOMAIN ='https://mandala.herokuapp.com';
app.use('/uploads',express.static(__dirname +'/uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.post('/create-checkout-session', async (req, res) => {
  
  let line_items = req.body.price_ID.map((item) => {
    
    return {
      price_data: {
        currency: "USD",
        unit_amount: item.price * 100,
        product_data: {

          name: item.title,
          images: [item.image],
          description: item.description,
          metadata: {
            id: item._id,

          }
        },
      },

      quantity: 1,


    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/?success=true`,
    cancel_url: `${YOUR_DOMAIN}/?canceled=true`,
  });
  
  return res.json(session.url);
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
