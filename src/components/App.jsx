import React, { useState, useEffect } from 'react';
import { AddForm } from './AddAbonentForm/AddAbonentForm';
import { ItemList } from './AbonentList/AbonentList';
import { Filter } from './Filtr/Filtr';

export default function App() {
  const [contacts, setContacts] = useState(
    () => localStorage.getItem('contacts') && []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const existContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existContact) {
      return alert(`${data.name} is already in contacts`);
    } else setContacts(prevContacts => [data, ...prevContacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  let visibleItems = getVisibleContact();
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
