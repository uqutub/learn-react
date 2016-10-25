// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

// Application State IAppState
import IAppState from './IAppState';

// reducers
import counter from './reducer/counter';

// epics
import counterEpic from './epic/counter';

// Application Epics / Effects
export const rootEpic = combineEpics(
  counterEpic.addTodoEpic
);

// Application Reducers
export const rootReducer = combineReducers<IAppState>({
  counter
});