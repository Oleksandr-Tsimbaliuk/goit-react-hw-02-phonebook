import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import ContactsList from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
  };

  // addContact = (name, number) => {
  //   const newContact = {
  //     name,
  //     id: nanoid(),
  //     number,
  //   };

  //   this.setState(({ contacts }) => ({
  //     contacts: [newContact, ...contacts],
  //   }));
  // };

  render() {
    return (
      <div>
        <Form title="Phonebook"></Form>
        <ContactsList title="Contacts"></ContactsList>
      </div>
    );
  }
}
