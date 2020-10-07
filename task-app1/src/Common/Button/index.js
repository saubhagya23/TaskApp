import React, { Component } from 'react';
import './style.css';

class Button extends Component {
  render() {
    const {
      btnText,
      btnStyle,
      onBtnClick,
    } = this.props;
    
    return(
      <div className={`container ${btnStyle}`} onClick={onBtnClick} data-testid="button">
        {btnText} 
      </div>
    );
  }
}

export default Button;