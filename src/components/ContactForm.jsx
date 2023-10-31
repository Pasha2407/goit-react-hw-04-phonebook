import { Component } from 'react';
import css from './Form.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  InputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  Submit = event => {
    event.preventDefault();
    const contactData = {
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(contactData);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.Submit} className={css.form}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            onChange={this.InputChange}
            value={this.state.name}
          />
          <span>Number</span>
          <input
            type="text"
            name="number"
            onChange={this.InputChange}
            value={this.state.number}
          />
        </label>
        <button type="submit">Add contact </button>
      </form>
    );
  }
}
