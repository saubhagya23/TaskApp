import { POST } from '../../network.js';
import {
  REGISTER_USER_STARTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_STARTED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER_STARTED,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
} from './constants'
import { setItem, removeItem, getItem } from '../../helper';


const registerUserStarted = () => ({
  type:  REGISTER_USER_STARTED,
});

const registerUserSuccess = (data) => ({
  type: REGISTER_USER_SUCCESS,
  data,
});

const registerUserFailed = (error) => ({
  type: REGISTER_USER_FAILED,
  error
});

export const registerUser = (url,params) => async(dispatch) => {
  dispatch(registerUserStarted());
  try {
    const response = await POST(url, params);
    dispatch(registerUserSuccess(response));
  }
  catch(error) {
    dispatch(registerUserFailed(error));
  }
}

const loginUserStarted = () => ({
  type: LOGIN_USER_STARTED,
})

const loginUserSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  data,
});

const loginUserFailed = (error) => ({
  type: LOGIN_USER_FAILED,
  error
});

export const loginUser = (url, params) => async(dispatch) => {
  dispatch(loginUserStarted());
  try {
    const response = await POST(url, params);
    // if(response && response.status === 200) {
      dispatch(loginUserSuccess(response));
      setItem('token', response.token);
    // } else {
    //   console.log('error occurred!!!');
    // }
  }
  catch(error) {
    dispatch(loginUserFailed(error));
  }
}

const logoutUserStarted = () => ({
  type: LOGOUT_USER_STARTED,
})

const logoutUserSuccess = (data) => ({
  type: LOGOUT_USER_SUCCESS,
  data,
});

const logoutUserFailed = (error) => ({
  type: LOGOUT_USER_FAILED,
  error
});

export const logoutUser = (url, params) => async(dispatch) => {
  dispatch(logoutUserStarted());
  try {
    const authToken = getItem('token');
    const response = await POST(url, params, authToken);
    // if(response && response.status === 200) {
      dispatch(logoutUserSuccess());
      removeItem('token');
    // } else {
    //   console.log('error occurred while logging out!!!');
    // }
  }
  catch(error) {
    dispatch(logoutUserFailed(error));
  }
}