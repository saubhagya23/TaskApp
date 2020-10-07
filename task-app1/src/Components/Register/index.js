import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import { registerUser } from '../../actions/authenticate';
import './style.css';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      email: '',
      password: '',
      id: '',
      age: 0,
      // designation: '',
      // competency: '',
    };
  }

  onRegisterClick = async() => {
    const {
      registerUser,
      history,
    } = this.props;

    const {
      userName,
      email,
      password,
      id,
      age,
      // designation,
      // competency,
    } = this.state;

    const userData = {
      name: userName,
      email,
      password,
      id,
      age,
      // designation,
      // competency,
    }
    console.log('asdf', this.state);
    await registerUser('/user', userData);
    this.resetStates();
    history.push('/login');
  }

  resetStates = () => {
    this.setState({
      userName: '',
      email: '',
      password: '',
      id: '',
      age: 0,
      // designation: '',
      // competency: '',
    })
  }

  onInputChange = (field, val) => {
    // console.log('$$$$', field, val);
    this.setState({
      [field]: val,
    })
  }

  render() {
    const inputStyle = 'register-inputStyle';
    const registerBtnStyle = 'register-btn-style';
    console.log('props in register->', this.props);
    return(
      <Layout {...this.props}>
        <form className='register-form'>
          Username: <Input
            type='text'
            name='userName'
            placeholder='enter username'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('userName', e.target.value)}
          /><br/>
          Email Id: <Input
            type='text'
            name='email'
            placeholder='enter email id'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('email', e.target.value)}
          /><br/>
          Password: <Input
            type='text'
            name='password'
            placeholder='enter password'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('password', e.target.value)}
          /><br/>
          Id: <Input
            type='text'
            name='id'
            placeholder='enter Id'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('id', e.target.value)}
          /><br/>
          Age: <Input
            type='text'
            name='age'
            placeholder='enter age'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('age', e.target.value)}
          /><br/>
          {/* Designation: <Input
            type='text'
            name='designation'
            placeholder='enter designation'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('designation', e.target.value)}
          /><br/>
          Competency: <Input
            type='text'
            name='competency'
            placeholder='enter competency'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('competency', e.target.value)} 
          /><br/> */}
          <Button
            btnText='REGISTER'
            btnStyle={registerBtnStyle}
            onBtnClick={this.onRegisterClick}
          />
        </form>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);