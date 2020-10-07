import React from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
import Button from '../../Common/Button';
import UpdateUser from '../UpdateUser';
import DeleteUser from '../DeleteUser';
import ViewAllUser from '../ViewAllUser';
import { getCurrentUser/* , getAllUsers */ } from '../../actions/user';
import './style.css';

class UserPage extends React.Component{
  constructor() {
    super();
    this.state = {
      currentComponent: '',
      // currentUser: {},
    }
  }
  componentDidMount() {
    const {
      getCurrentUser
    } = this.props;
    getCurrentUser('/user/me');
    // getAllUsers();
  }

  // componentWillReceiveProps(nextProps) {
  //   const {
  //     currentUser,
  //   } = this.props;

  //   if(JSON.stringify(nextProps.currentUser) !== JSON.stringify(currentUser)) {
  //     this.setState({
  //       currentUser,
  //     })
  //   }
  // }

  onUserSelection = (userAction) => {
    this.setState({
      currentComponent: userAction,
    })
  }

  displayCurrentSelection = (componentSelected) => {
    const {
      currentUser,
    } = this.props;
    switch(componentSelected) {
      case 'update': {
        //update component
        return <UpdateUser currentUserId={currentUser.id}/>;
      }
      case 'delete': {
        return <DeleteUser currentUserId={currentUser.id} {...this.props}/>;
      }
      case 'viewAll': {
        return <ViewAllUser />;
      }
      default:
        return;
    }
  }

  onSkipClick = () => {
    
  }

  render() {
    console.log('props in uaer page is->', this.props, 'state', this.state);
    const userBtnStyle = 'user-btn-style';
    const {
      // currentUser,
      currentComponent,
    } = this.state;

    // const currentUserdata = currentUser || this.props.currentUser;
    const {
      userLoginInfo: {
        user,
      },
      currentUser,
    } = this.props;
    
    return (
      <Layout {...this.props}>
        <div className='current-user-div'>
          <h3>
            Welcome {user ? user.name : currentUser.name}!
          </h3>
          <span>id: {user ? user.id : currentUser.id}</span>
        </div>
        <div className='user-buttons'>
          <Button
            btnText='Update user'
            btnStyle={userBtnStyle}
            onBtnClick={() => this.onUserSelection('update')}
          />
          <Button
            btnText='Delete user'
            btnStyle={userBtnStyle}
            onBtnClick={() => this.onUserSelection('delete')}
          />
          {/* <Button
            btnText='List all users'
            btnStyle={userBtnStyle}
            onBtnClick={() => this.onUserSelection('viewAll')}
          /> */}
        </div>
        <div className='user-action-div'>
            {
              this.displayCurrentSelection(currentComponent)
            }
          </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUserInfo,
  userLoginInfo: state.authenticateReducer.userLoginInfo
})

const mapDispatchToProps = {
  getCurrentUser,
  // getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);