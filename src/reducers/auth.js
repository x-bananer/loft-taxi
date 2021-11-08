import { LOG_IN, LOG_OUT } from '../actions';

const initialState = {
  isLoggedIn: false,
  email: '',
  password: '',
  token: ''
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      const {email, password, token} = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        email,
        password,
        token
      }
    }
    case LOG_OUT: {
      return {isLoggedIn: false}
    }
    default:
      return state;
  }
}