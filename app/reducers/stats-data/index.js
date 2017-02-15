// @flow
import actionNames from '../../constants/action-names';

const defaultStatsData = {};

export const statsDataReducer = (state = defaultStatsData, action) => {
  switch (action.type) {
    case actionNames.FETCH_USER_DATA:
      return action.payload;

    case actionNames.USER_DATA_SUCCESS:
      return action.userStats;

    default:
      return state;
  }
};

export default { statsDataReducer };
