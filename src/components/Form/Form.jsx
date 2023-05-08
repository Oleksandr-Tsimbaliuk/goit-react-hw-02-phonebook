import React, { Component } from 'react';
import { StyledForm } from './Form.styled';

export default class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = ({ target: { type, name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <StyledForm>
        <h2>{this.props.title}</h2>
        <label className="form-label">
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            required
            onChange={this.handleChange}
          />
        </label>

        <button className="form-btn" type="button">
          add contact
        </button>
      </StyledForm>
    );
  }
}
