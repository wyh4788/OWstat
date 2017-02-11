// @flow

// import actionNames from '../../constants/action-names';

const defaultStatsData = {
  counter: 0,
};

export const statsDataReducer = (state = defaultStatsData, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {
        ...state,
        counter: state.counter + action.increment,
      };
    default:
      return state;
  }
};

export default { statsDataReducer };
