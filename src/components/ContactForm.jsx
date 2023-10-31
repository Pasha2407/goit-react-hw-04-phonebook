import { useState } from 'react';
import css from './Form.module.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const InputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setNumber(value);
        return;
      }
      default:
        return;
    }
  };

  const Submit = event => {
    event.preventDefault();
    const contactData = {
      name: name,
      number: number,
    };
    addContact(contactData);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={Submit} className={css.form}>
      <label>
        <span>Name</span>
        <input type="text" name="name" onChange={InputChange} value={name} />
        <span>Number</span>
        <input
          type="text"
          name="number"
          onChange={InputChange}
          value={number}
        />
      </label>
      <button type="submit">Add contact </button>
    </form>
  );
};

export default ContactForm;
