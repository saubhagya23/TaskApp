import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/user';
import Button from '../../Common/Button';
import './style.css';

class DeleteUser extends React.Component {
  onSkipDeleteClick = () => {
    const {
      history,
    } = this.props;

    history.push('/userPage');
  }

  onDeleteClick = () => {
    const {
      currentUserId,
      deleteUser,
      history,
    } = this.props;

    deleteUser(`/user/${currentUserId}`);
    history.push('/login');
  }

  render() {
    const deleteBtnStyle = 'user-delete-btn-style';
    return(
      <div>
        Are you sure you want to delete this user?
        <Button
          btnText='DELETE'
          btnStyle={deleteBtnStyle}
          onBtnClick={this.onDeleteClick}
        />
        <Button
          btnText='SKIP'
          btnStyle={deleteBtnStyle}
          onBtnClick={this.onSkipDeleteClick}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfoGot: state.userReducer.userInfoGot,
})

const mapDispatchToProps = {
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);