import type { Action } from './types';

import { login } from '../helper/APIHelper';

export const INIT_CALL_LOGIN = 'INIT_CALL_LOGIN';
export const COMPLETE_CALL_LOGIN = 'COMPLETE_CALL_LOGIN';
export const ERROR_CALL_LOGIN = 'ERROR_CALL_LOGIN';

export function initateRequest():Action {
  return {
    type: INIT_CALL_LOGIN,
  };
}

export function completeRequest(loginObj:Object):Action {
  return {
    type: COMPLETE_CALL_LOGIN,
    payload: loginObj,
  };
}

export function requestError(loginObj:Object):Action {
  return {
    type: ERROR_CALL_LOGIN,
    payload: loginObj,
  };
}

export function doLogin(loginObj:Object):Action {
  return (dispatch) => {
    return login(loginObj)
      .then((json) => {
        dispatch(completeRequest(json.data));
      })
      .catch(error => dispatch(requestError(error)));
  };
}

export function doLogout():Action {
  return (dispatch) => {
    dispatch(completeRequest(null));
  };
}
