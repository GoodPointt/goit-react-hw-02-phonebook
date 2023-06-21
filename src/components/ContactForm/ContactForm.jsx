import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();

    const newContact = {
      id,
      name: this.state.name,
      number: this.state.number,
    };

    const { addNewContact } = this.props;
    addNewContact(newContact);

    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Name"
          // pattern="^[a-zA-Z-яА-Я]+(([' -][a-zA-Z-яА-Я ])?[a-zA-Z-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore
          d'Artagnan"
          required
        />

        <input
          onChange={this.handleChange}
          value={this.state.number}
          type="tel"
          name="number"
          placeholder="Phone"
          // pattern="\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
