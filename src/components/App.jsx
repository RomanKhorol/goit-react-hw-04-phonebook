import React, { useState, useEffect } from 'react';
import { AddForm } from './AddAbonentForm/AddAbonentForm';
import { ItemList } from './AbonentList/AbonentList';
import { Filter } from './Filtr/Filtr';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    const contactsFromStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsFromStorage);
    if (parsedContacts) {
      setContacts(prevContacts => [parsedContacts, ...prevContacts]);
    }
    return;
  }, [contacts]);

  useEffect(() => {}, []);

  const formSubmitHandler = data => {
    const existContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existContact) {
      return alert(`${data.name} is already in contacts`);
    }

    setContacts(prevContacts => [data, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    if (normalizedFilter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.contacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleItems = getVisibleContact();
  return (
    <div
      style={{
        height: '100%',
        padding: '15px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div
        style={{
          width: '300px',
          border: '1px solid black',
          borderRadius: '4px',
        }}
      >
        <h1
          style={{
            paddingLeft: '40px',
            fontSize: '40px',
            margin: '0px',
          }}
        >
          Phonebook
        </h1>
        <AddForm onSubmit={formSubmitHandler} />
      </div>

      <h2
        style={{
          margin: '0',
          paddingLeft: '40px',
          padding: '40px',
          fontSize: 40,
        }}
      >
        Contacts
      </h2>
      <Filter value={filter} onChange={changeFilter} />
      <ItemList contacts={visibleItems} deleteItem={deleteContact} />
    </div>
  );
}
