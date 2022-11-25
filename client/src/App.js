import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import './assets/css/general.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ChatBox from './components/Chatbox';
import Sell from './pages/Sell';
import Checkout from './components/Checkout';
import Home from './pages/Home';
import User from './pages/User';
import Explore from './pages/Explore';
import SignForm from './pages/SignForm';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>

          <Header />
          <div className='main-container'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/user'
                element={<User />}
              />
              <Route
                path='/explore'
                element={<Explore />}
              />
              <Route
                path='/signForm'
                element={<SignForm />}
              />
              <Route
                path='/sell'
                element={<Sell />}
              />
            </Routes>
            <Checkout />
            <ChatBox />
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
