import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import sample from './sample';

const rootReducer = combineReducers({ sample });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
