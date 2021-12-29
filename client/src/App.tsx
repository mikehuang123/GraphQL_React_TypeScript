import React, {useState} from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './App.css';
import CreateUser from './Componets/CreateUser';
import ListOfGame from './Componets/ListOfGame';
import Dashboard from './Componets/template/Dashboard';

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  
  });

  return (
    <>
      <ApolloProvider client = {client}>
        {/* <CreateUser /> */}
        <Dashboard />
        {/* <ListOfGame /> */}
      </ApolloProvider>
    </>
  );
}

export default App;
