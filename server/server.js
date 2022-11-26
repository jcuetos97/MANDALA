const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

//Nodemailer
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const cors = require("cors");

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


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


//Call the nodemailer function
let transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  auth: {
      user: 'Aquí va el mail',  
      pass: '/', 
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`Server is ready to take messages: ${success}`) 
});

transporter.use('compile', hbs({
  viewEngine: 'express-handlebars',
  viewPath: '../client/src/utils/views'
}));

app.post("/send", function(req, res) {
  const test = req.body
  console.log(test);
  let mailOptions = {
    from: `${req.body.mailerState.email}`, // TODO: email sender
    to: 'TESTMAIL@test.com',
    bcc: `${req.body.mailerState.email}`, // TODO: email receiver
    subject: 'Thank you for shopping with MANDALA',
    template: 'index',
};

transporter.sendMail(mailOptions, function (err, data) {
  if(err) {
    res.json({
      status: "fail",
    });
  } else {
    console.log('Email Sent! 👍📧');
    res.json({
      status: "success",
    });
  }
});
});