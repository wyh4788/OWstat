// @flow

import { combineReducers } from 'redux';

import { statsReducer } from './stats-data';

const reducer = combineReducers({
  userStats: statsReducer,
});

export default reducer;
