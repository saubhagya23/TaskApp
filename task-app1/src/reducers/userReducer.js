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
} from '../actions/user/constants'

const initState = {
  loading: false,
  currentUserInfo: {},
  userInfoGot: {},
  error: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_STARTED:
      return {
        ...state,
        loading: true,
      };

    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUserInfo: action.data,
      };

    case GET_CURRENT_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_USER_STARTED:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfoGot: action.data,
      };

    case GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

      case UPDATE_USER_STARTED:
        return {
          ...state,
          loading: true,
        };
  
      case UPDATE_USER_SUCCESS:
        console.log('update in reducer->', action.data);
        state.currentUserInfo.name = action.data.name;
        state.currentUserInfo.age = action.data.age;
        console.log('state.currentuserinfo->', state.currentUserInfo);
        return {
          ...state,
          loading: false,
          // userInfoGot: action.data,
          // currentUserInfo: action.data[0],
        };
  
      case UPDATE_USER_FAILED:
        return {
          ...state,
          loading: false,
          error: action.error,
        };

      case DELETE_USER_STARTED:
        return {
          ...state,
          loading: true,
        };

      case DELETE_USER_SUCCESS: {
        console.log('delete in reducer->', action.data);
        return {
          ...state,
          loading: false,
          // userInfoGot: action.data,
          // currentUserInfo: action.data[0],
        };
      }

      case DELETE_USER_FAILED: 
        return {
          ...state,
          loading: false,
          error: action.error,
        };

    default:
      return state;
  }
};

export default userReducer;
