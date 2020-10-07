import React, { Component } from 'react';
import './style.css';

class Input extends Component {
  render() {
    const {
      type,
      name,
      value,
      placeholder,
      inputStyle,
      onChange,
    } = this.props;
    return(
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`input-box ${inputStyle && inputStyle}`}
        onChange={onChange}
        data-testid="input"
      />
    );
  }
}

export default Input;