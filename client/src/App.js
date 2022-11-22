import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './assets/css/general.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ChatBox from './components/Chatbox';
import Sell from './pages/Sell';
import Home from './pages/Home';
import User from './pages/User';
import Explore from './pages/Explore';
import SignForm from './pages/SignForm';

// Construct our main GraphQL API endpoint
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header/>
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
              <ChatBox/>
            </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
