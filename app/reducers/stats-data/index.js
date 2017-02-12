// @flow
const defaultStats = {};

export const statsReducer = (state = defaultStats, action) => {
  switch (action.type) {
    case 'FETCH_USER_DATA':
      return {
        ...state,
        userStats: action.payload,
      };

    case 'USER_DATA_SUCCESS':
      return {
        ...state,
        userStats: action.userStats,
      };

    default:
      return state;
  }
};

export default { statsReducer };
