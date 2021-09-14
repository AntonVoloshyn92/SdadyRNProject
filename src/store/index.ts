import {applyMiddleware, combineReducers, createStore, Middleware} from 'redux';
import thunk, {ThunkMiddleware} from 'redux-thunk';
import appReducer from './app.reducer';
import {AppActionTypes} from './app.types';

const rootReducer = combineReducers({
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const middleware: Middleware[] = [thunk as ThunkMiddleware<RootState, Actions>];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export type Actions = AppActionTypes;
