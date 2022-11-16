import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';

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
            <div>
              <Routes>
                <Route
                path='/'
                element={<Home />}  
                />
                <Route
                path='/about'
                element={<About />}  
                />
                <Route
                path='/explore'
                element={<Explore />}  
                />
              </Routes>
            </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
