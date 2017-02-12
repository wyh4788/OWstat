// @flow

import actionNames from '../../constants/action-names';

export const userDataSuccess = response => ({
  type: actionNames.USER_DATA_SUCCESS,
  userStats: response.data,
});
