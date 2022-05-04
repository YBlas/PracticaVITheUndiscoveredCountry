import React, { FC, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout';
import Header from './components/Header';
import OptionsContainer from './containers/OptionsContainer';
import { OptionButton } from './styles/emotion';
import Mandanga from './containers/Mandanga';
import Contacts from './components/Contacts';
import AZContacts from './components/AZContacts';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import ZAContacts from './components/ZAContacts';
import AddContact from './components/AddContact';
import DeleteContact from './components/DeleteContact';
import UpdateContact from './components/UpdateContact';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache()
});

const App: FC = () => {

  const [viewAZ, changeViewAZ] = React.useState(true);
  const [viewZA, changeViewZA] = React.useState(false);
  const [viewAddContact, changeViewAddContact] = React.useState(false);
  const [viewDeleteContacts, changeViewDeleteContacts] = React.useState(false);
  const [viewEditContact, changeViewEditContact] = React.useState(false);

  return (
    <Layout>
      <Header />
      <OptionsContainer>
        <OptionButton onClick={() => { changeViewAZ(true); changeViewZA(false); changeViewAddContact(false); changeViewDeleteContacts(false); changeViewEditContact(false); }
        }>A-Z Order</OptionButton>
        <OptionButton onClick={() => { changeViewAZ(false); changeViewZA(true); changeViewAddContact(false); changeViewDeleteContacts(false); changeViewEditContact(false); }
        }>Z-A Order</OptionButton>
        <OptionButton onClick={() => { changeViewAZ(false); changeViewZA(false); changeViewAddContact(true); changeViewDeleteContacts(false); changeViewEditContact(false); }
        }>Add Contact</OptionButton>
        <OptionButton onClick={() => { changeViewAZ(false); changeViewZA(false); changeViewAddContact(false); changeViewDeleteContacts(true); changeViewEditContact(false); }
        }>Delete Contacts</OptionButton>
        <OptionButton onClick={() => { changeViewAZ(false); changeViewZA(false); changeViewAddContact(false); changeViewDeleteContacts(false); changeViewEditContact(true); }
        }>Edit Contact</OptionButton>
      </OptionsContainer>
      <ApolloProvider client={client}>
        <Mandanga>
          {viewAZ && <AZContacts />}
          {viewZA && <ZAContacts />}
          {viewAddContact && <AddContact />}
          {viewDeleteContacts && <DeleteContact />}
          {viewEditContact && <UpdateContact />}
        </Mandanga>
      </ApolloProvider>
    </Layout>
  )
}

export default App;
