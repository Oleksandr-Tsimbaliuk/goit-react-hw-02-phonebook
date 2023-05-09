import React from 'react';

function ContactsList({ title, contacts }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <div>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactsList;
