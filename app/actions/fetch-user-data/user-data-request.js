// @flow

import actionNames from '../../constants/action-names';

export const userDataRequest = userId => ({
  type: actionNames.USER_DATA_REQUEST,
  payload: { userId },
});
