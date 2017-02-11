// @flow

// import actionNames from '../../constants/action-names';

const defaultStatsData = {};

export const statsDataReducer = (state = defaultStatsData, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {
        ...state,
        userStats: state.userStats + 1,
      };
    default:
      return state;
  }
};

export default { statsDataReducer };
