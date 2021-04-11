import {
  REGISTER_USER_STARTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_STARTED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER_STARTED,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED
} from '../actions/authenticate/constants'

const initState = {
  loading: false,
  userRegisterInfo: {},
  error: null,
  loginLoading: false,
  userLoginInfo: {}
}

const authenticateReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER_STARTED:
      return {
        ...state,
        loading: true
      }

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userRegisterInfo: action.data
      }

    case REGISTER_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case LOGIN_USER_STARTED:
      return {
        ...state,
        loginLoading: true
      }

    case LOGIN_USER_SUCCESS:
      console.log('action.payload in login->', action.payload)
      return {
        ...state,
        loginLoading: false,
        userLoginInfo: action.data
      }

    case LOGIN_USER_FAILED:
      return {
        ...state,
        loginLoading: false,
        error: action.error
      }

    case LOGOUT_USER_STARTED:
      return {
        ...state,
        loginLoading: true
      }

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        userLoginInfo: {}
      }

    case LOGOUT_USER_FAILED:
      return {
        ...state,
        loginLoading: true
      }

    default:
      return state
  }
}

export default authenticateReducer
