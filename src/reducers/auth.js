import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS
} from "../actions/actionTypes";

const intialAuthState = {
  user: {},
  error: null,
  isLoggedin: false,
  inProgress: false
};

export default function auth(state = intialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        inProgress: false,
        error: null
      };

    case LOGIN_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error
      };

    default:
      return state;
  }
}
