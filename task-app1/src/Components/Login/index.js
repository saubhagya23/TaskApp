import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import Input from '../../Common/Input';
import './style.css'
import Button from '../../Common/Button';
import { loginUser } from '../../actions/authenticate';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    const {
      userLoginInfo,
      history,
    } = this.props;
    if (!!Object.keys(userLoginInfo).length) {
      history.push('/userPage');
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      userLoginInfo,
      history,
    } = this.props;

    if (JSON.stringify(nextProps.userLoginInfo) !== JSON.stringify(userLoginInfo)) {
      history.push('/userPage');
    }

  }

  onInputChange = (field, val) => {
    // console.log('$$$$', field, val);
    this.setState({
      [field]: val,
    })
  }

  onLoginClick = async() => {
    //login to backend....!!!
    const {
      loginUser,
    } = this.props;

    const {
      email,
      password,
    } = this.state;

    const userData = {
      email,
      password,
    };
    console.log('login btn clicked!!');

    this.resetStates();
    await loginUser('/user/login', userData);
  }

  resetStates = () => {
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {
    const inputStyle = 'login-inputStyle';
    const loginBtnStyle = 'login-btn-style';
    // console.log('props in login->', this.props);
    const {
      email,
      password
    } = this.state;
    return(
      <Layout {...this.props}>
        <form className='login-form'>
          Email: <Input
            type='text'
            name='email'
            value={email}
            placeholder='enter email id'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('email', e.target.value)}
          /><br/>
          Password: <Input
            type='password'
            name='password'
            value={password}
            placeholder='enter password'
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('password', e.target.value)}
          /><br/>
          <Button
            btnText='LOGIN'
            btnStyle={loginBtnStyle}
            onBtnClick={this.onLoginClick}
          />
        </form>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  userLoginInfo: state.authenticateReducer.userLoginInfo,
})

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);