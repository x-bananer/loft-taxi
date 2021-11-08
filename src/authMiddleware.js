import { AUTHENTICATE, logIn} from "./actions";
import {serverLogIn} from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const { success, token = '' } = await serverLogIn(email, password)
    if(success){
      store.dispatch(logIn(email, password, token));
    }
  } else {
    next(action);
  }
};
