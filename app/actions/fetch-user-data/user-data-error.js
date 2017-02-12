// @flow

import actionNames from '../../constants/action-names';

export const userDataError = error => ({
  type: actionNames.USER_DATA_ERROR,
  payload: error,
});
