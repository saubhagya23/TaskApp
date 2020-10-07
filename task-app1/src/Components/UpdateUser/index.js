import React from 'react';
import { connect } from 'react-redux';
import { getUser, updateUser } from '../../actions/user';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import './style.css';

class UpdateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
    }
  }

  componentDidMount() {
    const {
      currentUserId,
      getUser,
    } = this.props;

    getUser(`/user/${currentUserId}`);
  }

  componentWillReceiveProps(nextProps) {
    const {
      userInfoGot
    } = this.props;

    if(!!nextProps.userInfoGot.length && (JSON.stringify(nextProps.userInfoGot[0]) !== JSON.stringify(userInfoGot[0]))) {
      const {
        name,
        age,
      } = nextProps.userInfoGot[0];

      this.setState({
        name,
        age,
      })
    }
  }

  onInputChange = (field, val) => {
    // console.log('$$$$', field, val);
    this.setState({
      [field]: val,
    })
  }

  onUpdateClick = () => {
    const {
      name,
      age,
    } = this.state;
    const {
      currentUserId,
      updateUser,
    } = this.props;

    const params = {
      name,
      age,
    };

    console.log('this.state in update click->', this.state);

    updateUser(`/user/${currentUserId}`, params);
  }

  render() {
    const inputStyle = 'user-update-inputStyle';
    const updateBtnStyle = 'user-update-btn-style';
    console.log('userInfoGot---in render->', this.props.userInfoGot[0], this.state);
    const {
      name,
      age,
    } = this.state;
    return(
      <div>
        <form className='user-update-form'>
          Username: <Input
            type='text'
            name='name'
            placeholder='enter name'
            value={name}
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('name', e.target.value)}
          /><br/>
          Age: <Input
            type='text'
            name='age'
            placeholder='enter age'
            value={age}
            inputStyle={inputStyle}
            onChange={(e) => this.onInputChange('age', e.target.value)}
          /><br/>
          <Button
            btnText='UPDATE'
            btnStyle={updateBtnStyle}
            onBtnClick={this.onUpdateClick}
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfoGot: state.userReducer.userInfoGot,
})

const mapDispatchToProps = {
  getUser,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);