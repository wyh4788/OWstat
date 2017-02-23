// @flow
// import actionNames from '../../constants/action-names';

const defaultStatsData = {

};

export const statsDataReducer = (state = defaultStatsData, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        userStats: action.payload,
      };
    case 'FETCH_FAIL':
      return {
        ...state,
        userStats: action.payload,
      };

    default:
      return state;
  }
};

export default { statsDataReducer };
