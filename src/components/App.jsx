import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerFormSubmit = contactData => {
    if (
      this.state.contacts.some(contact => contact.name === contactData.name)
    ) {
      alert(`Contact whith name ${contactData.name} is already exists`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactData],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredContacts = () => {
    // this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const value = this.filteredContacts();
    console.log(value);
    // console.log(this.state.contacts);
    return (
      <div>
        <Form onSubmit={this.handlerFormSubmit} title="Phonebook"></Form>
        <Filter
          filter={this.state.filter}
          changeFilter={this.changeFilter}
        ></Filter>
        <ContactsList
          contacts={value}
          title="Contacts"
          deleteContact={this.deleteContact}
        ></ContactsList>
      </div>
    );
  }
}
