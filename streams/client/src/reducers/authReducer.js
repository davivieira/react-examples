import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.userId };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: action.userId };
    default:
      return state;
  }
};

export default authReducer;