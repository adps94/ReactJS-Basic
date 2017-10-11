import type { Action } from './types';

import { contacts } from '../helper/APIHelper';

export const INIT_CALL_CONTACT = 'INIT_CALL_CONTACT';
export const COMPLETE_CALL_CONTACT = 'COMPLETE_CALL_CONTACT';
export const ERROR_CALL_CONTACT = 'ERROR_CALL_CONTACT';

export function initateRequest():Action {
  return {
    type: INIT_CALL_CONTACT,
  };
}

export function completeRequest(brandsArray:Array):Action {
  return {
    type: COMPLETE_CALL_CONTACT,
    payload: brandsArray,
  };
}

export function requestError(brandsArray:Object):Action {
  return {
    type: ERROR_CALL_CONTACT,
    payload: brandsArray,
  };
}

export function getContact():Action {
  return (dispatch) => {
    return contacts()
      .then((json) => {
        dispatch(completeRequest(json.data[0]));
      })
      .catch(error => dispatch(requestError(error)));
  };
}
