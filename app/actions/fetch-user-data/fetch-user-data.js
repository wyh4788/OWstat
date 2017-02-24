// @flow

import axios from 'axios';
import { userDataRequest } from './user-data-request';
import { userDataSuccess } from './user-data-success';
import { userDataError } from './user-data-error';

export const fetchUserData = userId => (
  (dispatch, getState) => {
    dispatch(userDataRequest(userId));
    return axios(`https://owapi.net/api/v3/u/${userId}/blob`)
      .then(data => dispatch(userDataSuccess(data)))
      .catch(error => dispatch(userDataError(error)));
  }
);
