import type { Action } from '../actions/types';
import { INIT_CALL_LOGIN, COMPLETE_CALL_LOGIN, ERROR_CALL_LOGIN } from '../actions/login';

export type State = {
  isFetching: boolean,
  user: Object,
  error: Object,
}

const initialState = {
  isFetching: false,
  user: null,
  error: null,
};

export default function (state:State = initialState, action:Action): State {

  if (action.type === INIT_CALL_LOGIN) {
    return {
      isFetching: true,
      user: null,
      error: null,
    };
  }
  if (action.type === COMPLETE_CALL_LOGIN) {
    return {
      isFetching: false,
      user: action.payload,
      error: null,
    };
  }
  if (action.type === ERROR_CALL_LOGIN) {
    return {
      isFetching: false,
      user: null,
      error: action.payload,
    };
  }
  return state;
}
