import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

export interface AppState {
  isWhiteTheme: boolean;
}

export const SET_IS_WHITE_THEME = 'SET_WHITE_THEME';

interface SetThemeType extends Action {
  type: typeof SET_IS_WHITE_THEME;
  payload: boolean;
}

export type AppActionTypes = SetThemeType;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  undefined,
  AppActionTypes
>;

export type AppThunkDispatcher = ThunkDispatch<
  AppState,
  undefined,
  AppActionTypes
>;
