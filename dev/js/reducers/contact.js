import type { Action } from '../actions/types';
import { INIT_CALL_CONTACT, COMPLETE_CALL_CONTACT, ERROR_CALL_CONTACT } from '../actions/contact';

export type State = {
  isFetching: boolean,
  contact: Array,
  error: Object,
}

const initialState = {
  isFetching: false,
  contact: null,
  error: null,
};

export default function (state:State = initialState, action:Action): State {

  if (action.type === INIT_CALL_CONTACT) {
    return {
      isFetching: true,
      contact: [],
      error: null,
    };
  }
  if (action.type === COMPLETE_CALL_CONTACT) {
    return {
      isFetching: false,
      contact: action.payload,
      error: null,
    };
  }
  if (action.type === ERROR_CALL_CONTACT) {
    return {
      isFetching: false,
      contact: [],
      error: action.payload,
    };
  }
  return state;
}
