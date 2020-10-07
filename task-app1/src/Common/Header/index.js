import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo1 from '../../assets/images/logo2.png';
import Button from '../Button';
import { logoutUser } from '../../actions/authenticate';
import { getItem } from '../../helper';
import './style.css';

class Header extends Component {
  onLoginClick = () => {
    const {
      history,
    } = this.props;
    history.push('/login');
  }

  onRegisterClick = () => {
    const {
      history,
    } = this.props;
    history.push('/register');
  }

  onLogoutClick = async() => {
    const {
      logoutUser,
      history,
    } = this.props;
    await logoutUser('/user/logout');
    history.push('/');
  }

  render() {
    const loginBtnStyle = 'login-btn-style';
    const {
      userLoginInfo: {
        token,
      },
    } = this.props;

    const tokenStored = token ? token : getItem('token');
    const isTokenAvailable = !!tokenStored;
    return(
      <div data-testid="header-main-div">
        <header className='mainContainer'>
          <div className='logoContainer'>
            <img className='logo-image' src={Logo1} alt='App Logo' />
            <span>React Test App</span>
          </div>
          {
            isTokenAvailable ? 
            (
              <div className='header-btn'>
                <Button
                  btnText='LOGOUT'
                  btnStyle={loginBtnStyle}
                  onBtnClick={this.onLogoutClick}
                />
              </div>
            ) : (
              <div className='header-btn'>
                <Button
                  btnText='LOGIN'
                  btnStyle={loginBtnStyle}
                  onBtnClick={this.onLoginClick}
                />
                <Button
                  btnText='REGISTER'
                  btnStyle={loginBtnStyle}
                  onBtnClick={this.onRegisterClick}
                />
              </div>
            )
          }
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLoginInfo: state.authenticateReducer.userLoginInfo,
})

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);