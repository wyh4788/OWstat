// @flow

// import actionNames from '../../constants/action-names';

const defaultStatsData = {
  counter: 1,
};

export const statsDataReducer = (state = defaultStatsData, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return {
        ...state,
        counter: state.counter + action.increment,
      };
    case 'MULT_ONE':
      return {
        ...state,
        counter: (state.counter * action.increase),
      };
    default:
      return state;
  }
};

export default { statsDataReducer };
