// @flow
const defaultStats = {};

<<<<<<< HEAD
export const statsReducer = (state = defaultStats, action) => {
=======
// import actionNames from '../../constants/action-names';

const defaultStatsData = {
  counter: 0,
};

export const statsDataReducer = (state = defaultStatsData, action) => {
>>>>>>> parent of a1fc9f5... Add feature: add multiply button
  switch (action.type) {
    case 'FETCH_USER_DATA':
      return {
        ...state,
        userStats: action.payload,
      };
<<<<<<< HEAD

    case 'USER_DATA_SUCCESS':
      return {
        ...state,
        userStats: action.userStats,
      };

=======
>>>>>>> parent of a1fc9f5... Add feature: add multiply button
    default:
      return state;
  }
};

export default { statsReducer };
