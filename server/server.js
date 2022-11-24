const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
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


// This is the checkout session
require('dotenv').config();
const secretkey = (process.env.secret);
const stripe = require("stripe")(secretkey);
app.use(express.static('public'));
const YOUR_DOMAIN = 'http://localhost:3000';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post('/create-checkout-session', async (req, res) => {
  console.log("reqbody=", req.body);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide Price ID (for example, pr_1234) of the product you want to sell

        price: req.body.price_ID,
        quantity: 1,
        //currency: "USD"

      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/explore?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ url: session.url });
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