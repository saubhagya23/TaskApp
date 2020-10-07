import {
  GET_CURRENT_USER_STARTED,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_STARTED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  DELETE_USER_STARTED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from './constants';
import { GET, PUT, DELETE } from '../../network'

const getCurrentUserStarted = () => ({
  type: GET_CURRENT_USER_STARTED,
})

const getCurrentUserSuccess = data => ({
  type: GET_CURRENT_USER_SUCCESS,
  data,
})

const getCurrentUserFailed = error => ({
  type: GET_CURRENT_USER_FAILED,
  error,
})

export const getCurrentUser = (url, params) => async(dispatch) => {
  dispatch(getCurrentUserStarted());
  try {
    const response = await GET(url, params);
    dispatch(getCurrentUserSuccess(response));
  }
  catch(error) {
    dispatch(getCurrentUserFailed(error));
  }
}

const getUserStarted = () => ({
  type: GET_USER_STARTED,
})

const getUserSuccess = data => ({
  type: GET_USER_SUCCESS,
  data,
})

const getUserFailed = error => ({
  type: GET_USER_FAILED,
  error,
})

export const getUser = (url, params) => async(dispatch) => {
  dispatch(getUserStarted());
  try {
    const response = await GET(url, params);
    dispatch(getUserSuccess(response));
  }
  catch(error) {
    dispatch(getUserFailed(error));
  }
}

const updateUserStarted = () => ({
  type: UPDATE_USER_STARTED,
})

const updateUserSuccess = data => ({
  type: UPDATE_USER_SUCCESS,
  data,
})

const updateUserFailed = error => ({
  type: UPDATE_USER_FAILED,
  error,
})

export const updateUser = (url, params) => async(dispatch) => {
  dispatch(updateUserStarted());
  try {
    const response = await PUT(url, params);
    dispatch(updateUserSuccess(params));
  }
  catch(error) {
    dispatch(updateUserFailed(error));
  }
}

const deleteUserStarted = () => ({
  type: DELETE_USER_STARTED,
})

const deleteUserSuccess = data => ({
  type: DELETE_USER_SUCCESS,
  data,
})

const deleteUserFailed = error => ({
  type: DELETE_USER_FAILED,
  error,
})

export const deleteUser = (url, params) => async(dispatch) => {
  dispatch(deleteUserStarted());
  try {
    const response = await DELETE(url, params);
    dispatch(deleteUserSuccess(params));
  }
  catch(error) {
    dispatch(deleteUserFailed(error));
  }
}