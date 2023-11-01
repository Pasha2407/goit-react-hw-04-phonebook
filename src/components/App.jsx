import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const AddContact = contactData => {
    const hasDuplicates = contacts.some(
      item => item.name.toLowerCase() === contactData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    } else {
      const finalProduct = {
        ...contactData,
        id: nanoid(),
      };
      setContacts([...contacts, finalProduct]);
    }
  };

  const DeleteContact = contactId => {
    setContacts(contacts.filter(item => item.id !== contactId));
  };

  const InputFilterChange = event => {
    setFilter(event.target.value);
  };

  const FilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtered = FilteredContacts();

  return (
    <div className={css.main}>
      <h2>Phonebook</h2>
      <ContactForm addContact={AddContact} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} filterChange={InputFilterChange} />
      <ContactList contacts={filtered} deleteContact={DeleteContact} />
    </div>
  );
};
