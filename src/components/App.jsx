import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import Form from './Form';
import ContactsList from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
  };

  handlerFormSubmit = contactData => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactData],
    }));
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div>
        <Form onSubmit={this.handlerFormSubmit} title="Phonebook"></Form>
        <ContactsList
          contacts={this.state.contacts}
          title="Contacts"
        ></ContactsList>
      </div>
    );
  }
}
